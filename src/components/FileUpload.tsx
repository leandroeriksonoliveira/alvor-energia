"use client";

import { useCallback, useRef, useState } from "react";
import {
  FileText,
  Image as ImageIcon,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { validateBillFile } from "@/lib/quote-schema";

type UploadState = "idle" | "dragging" | "ready" | "error";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}

function getFileIcon(file: File) {
  if (file.type === "application/pdf") {
    return <FileText className="h-8 w-8 text-red-500" aria-hidden="true" />;
  }
  return <ImageIcon className="h-8 w-8 text-sky-500" aria-hidden="true" />;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileUpload({ onFileChange, error, disabled }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [localError, setLocalError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFile = useCallback(
    (selected: File | null) => {
      if (!selected) return;

      const validationError = validateBillFile(selected);
      if (validationError) {
        setLocalError(validationError);
        setUploadState("error");
        setFile(null);
        onFileChange(null);
        return;
      }

      setLocalError(null);
      setFile(selected);
      setUploadState("ready");
      onFileChange(selected);

      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 80);
    },
    [onFileChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      setUploadState("idle");

      const dropped = e.dataTransfer.files[0];
      if (dropped) handleFile(dropped);
    },
    [disabled, handleFile]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setUploadState("dragging");
    },
    [disabled]
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setUploadState(file ? "ready" : "idle");
    },
    [file]
  );

  const clearFile = () => {
    setFile(null);
    setUploadState("idle");
    setProgress(0);
    setLocalError(null);
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const displayError = error || localError;

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        name="billFile"
        accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
        className="sr-only"
        disabled={disabled}
        onChange={(e) => {
          const selected = e.target.files?.[0] ?? null;
          if (selected) handleFile(selected);
        }}
        aria-describedby={displayError ? "billFile-error" : undefined}
      />

      {!file ? (
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Arraste ou clique para enviar a conta de luz"
          onClick={() => !disabled && inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 transition-all duration-200",
            uploadState === "dragging"
              ? "border-primary bg-primary/5 scale-[1.01]"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30",
            disabled && "pointer-events-none opacity-50",
            displayError && "border-destructive/50"
          )}
        >
          <Upload
            className={cn(
              "mb-3 h-10 w-10 transition-colors",
              uploadState === "dragging" ? "text-primary" : "text-muted-foreground"
            )}
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-foreground">
            Arraste sua conta de luz aqui
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ou clique para selecionar · PDF, PNG, JPG · máx. 10MB
          </p>
        </div>
      ) : (
        <div className="rounded-xl border bg-muted/20 p-4">
          <div className="flex items-start gap-3">
            {getFileIcon(file)}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
              {progress < 100 ? (
                <div className="mt-3 space-y-1">
                  <Progress value={progress} aria-label="Progresso do upload" />
                  <p className="text-xs text-muted-foreground">Preparando arquivo...</p>
                </div>
              ) : (
                <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Arquivo pronto para envio
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={clearFile}
              disabled={disabled}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Remover arquivo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {displayError && (
        <p
          id="billFile-error"
          className="flex items-center gap-1 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {displayError}
        </p>
      )}
    </div>
  );
}
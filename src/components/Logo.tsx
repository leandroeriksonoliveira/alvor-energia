import Image from "next/image";
import Link from "next/link";
import { company, logo } from "@/lib/company";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 36, className: "h-8 w-auto" },
  md: { width: 160, height: 48, className: "h-10 w-auto" },
  lg: { width: 200, height: 60, className: "h-12 w-auto" },
};

export function Logo({ className, showText = false, size = "md" }: LogoProps) {
  const dim = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src={logo.full}
        alt={logo.alt}
        width={dim.width}
        height={dim.height}
        className={cn(dim.className, "object-contain object-left")}
        priority
      />
      {showText && (
        <span className="sr-only">{company.name}</span>
      )}
    </Link>
  );
}

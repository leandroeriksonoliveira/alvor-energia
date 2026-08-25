import {
  calculatePreliminaryEstimate,
  ESTIMATE_DISCLAIMER,
  formatCurrencyBRL,
  formatKwh,
  formatKwp,
  type PreliminaryEstimate,
} from "@/lib/quote-estimate";
import type { PropertyType } from "@/lib/quote-schema";
import { cn } from "@/lib/utils";

interface PreliminaryEstimateSummaryProps {
  averageBill?: number;
  propertyType?: PropertyType;
  estimate?: PreliminaryEstimate;
  compact?: boolean;
  className?: string;
}

function getEstimate(
  estimate?: PreliminaryEstimate,
  averageBill?: number,
  propertyType?: PropertyType
): PreliminaryEstimate | null {
  if (estimate) return estimate;
  if (averageBill && averageBill >= 50) {
    return calculatePreliminaryEstimate(averageBill, propertyType);
  }
  return null;
}

export function PreliminaryEstimateSummary({
  averageBill,
  propertyType,
  estimate,
  compact = false,
  className,
}: PreliminaryEstimateSummaryProps) {
  const result = getEstimate(estimate, averageBill, propertyType);

  if (!result) return null;

  const metrics = [
    {
      label: "Consumo estimado",
      value: `${formatKwh(result.monthlyConsumptionKwh)}/mês`,
    },
    {
      label: "Sistema sugerido",
      value: formatKwp(result.systemSizeKwp),
    },
    {
      label: "Módulos (ref.)",
      value: `~${result.estimatedPanels} placas`,
    },
    {
      label: "Economia mensal (ref.)",
      value: formatCurrencyBRL(result.estimatedMonthlySavings),
    },
    {
      label: "Investimento (faixa)",
      value: `${formatCurrencyBRL(result.estimatedInvestmentMin)} – ${formatCurrencyBRL(result.estimatedInvestmentMax)}`,
    },
    {
      label: "Retorno (ref.)",
      value: `${result.estimatedPaybackYearsMin} – ${result.estimatedPaybackYearsMax} anos`,
    },
  ];

  return (
    <div
      className={cn(
        "rounded-xl border border-emerald-200/80 bg-emerald-50/60",
        compact ? "p-3" : "p-4",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
        Estimativa preliminar
      </p>

      <dl
        className={cn(
          "mt-3 grid gap-2",
          compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
        )}
      >
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg bg-white/70 px-2.5 py-2">
            <dt className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {metric.label}
            </dt>
            <dd className="mt-0.5 text-sm font-semibold text-foreground">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-[11px] leading-relaxed text-emerald-900/80">
        {ESTIMATE_DISCLAIMER}
      </p>
    </div>
  );
}

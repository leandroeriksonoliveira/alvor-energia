import type { PropertyType } from "@/lib/quote-schema";

/** Premissas técnicas para estimativa preliminar (ajustáveis). */
const ESTIMATE_DEFAULTS = {
  /** Tarifa média efetiva com encargos (R$/kWh). */
  tariffBrlPerKwh: 0.92,
  /** Horas de sol pico médias — referência Minas Gerais. */
  hspHours: 4.9,
  /** Performance ratio (perdas de inversor, temperatura, fiação). */
  performanceRatio: 0.78,
  daysPerMonth: 30,
  /** Fração da conta compensável em sistema On-Grid. */
  billCoverageRatio: 0.92,
  /** Potência nominal por módulo (W). */
  panelWatts: 550,
  /**
   * Faixa R$/kWp instalado (kit + instalação + projeto), referência de mercado 2026.
   * Valores ajustáveis — a prévia no site é apenas referência, não proposta comercial.
   */
  costPerKwpMin: 3_200,
  costPerKwpMax: 5_000,
} as const;

const PROPERTY_SIZE_BUFFER: Record<PropertyType, number> = {
  residential: 1,
  commercial: 1.05,
  industrial: 1.1,
  rural: 1.08,
};

export type PreliminaryEstimate = {
  monthlyConsumptionKwh: number;
  systemSizeKwp: number;
  estimatedPanels: number;
  annualGenerationKwh: number;
  estimatedMonthlySavings: number;
  estimatedAnnualSavings: number;
  estimatedInvestmentMin: number;
  estimatedInvestmentMax: number;
  estimatedPaybackYearsMin: number;
  estimatedPaybackYearsMax: number;
};

export function calculatePreliminaryEstimate(
  averageBill: number,
  propertyType?: PropertyType
): PreliminaryEstimate {
  const {
    tariffBrlPerKwh,
    hspHours,
    performanceRatio,
    daysPerMonth,
    billCoverageRatio,
    panelWatts,
    costPerKwpMin,
    costPerKwpMax,
  } = ESTIMATE_DEFAULTS;

  const sizeBuffer = propertyType ? PROPERTY_SIZE_BUFFER[propertyType] : 1;

  const monthlyConsumptionKwh = averageBill / tariffBrlPerKwh;

  const rawSystemKwp =
    monthlyConsumptionKwh / (hspHours * daysPerMonth * performanceRatio);

  const systemSizeKwp =
    Math.ceil(rawSystemKwp * sizeBuffer * 10) / 10;

  const estimatedPanels = Math.max(
    1,
    Math.ceil((systemSizeKwp * 1000) / panelWatts)
  );

  const annualGenerationKwh =
    systemSizeKwp * hspHours * 365 * performanceRatio;

  const estimatedMonthlySavings = averageBill * billCoverageRatio;
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  const estimatedInvestmentMin = systemSizeKwp * costPerKwpMin;
  const estimatedInvestmentMax = systemSizeKwp * costPerKwpMax;

  const annualSavings = estimatedAnnualSavings;
  const estimatedPaybackYearsMax =
    annualSavings > 0 ? estimatedInvestmentMax / annualSavings : 0;
  const estimatedPaybackYearsMin =
    annualSavings > 0 ? estimatedInvestmentMin / annualSavings : 0;

  return {
    monthlyConsumptionKwh: round(monthlyConsumptionKwh, 0),
    systemSizeKwp,
    estimatedPanels,
    annualGenerationKwh: round(annualGenerationKwh, 0),
    estimatedMonthlySavings: round(estimatedMonthlySavings, 2),
    estimatedAnnualSavings: round(estimatedAnnualSavings, 2),
    estimatedInvestmentMin: round(estimatedInvestmentMin, 0),
    estimatedInvestmentMax: round(estimatedInvestmentMax, 0),
    estimatedPaybackYearsMin: round(estimatedPaybackYearsMin, 1),
    estimatedPaybackYearsMax: round(estimatedPaybackYearsMax, 1),
  };
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function formatKwh(value: number): string {
  return `${Math.round(value).toLocaleString("pt-BR")} kWh`;
}

export function formatKwp(value: number): string {
  return `${value.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} kWp`;
}

export const ESTIMATE_DISCLAIMER =
  "Esta prévia é apenas uma referência com base no valor informado da conta. Não substitui visita técnica, parecer de acesso, projeto executivo nem proposta comercial formal da Alvor.";

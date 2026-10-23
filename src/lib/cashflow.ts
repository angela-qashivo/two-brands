export const FORECAST_WEEKS = 13;

export function workingCapitalReleased(annualCreditSales: number, improvementDays: number): number {
  if (!Number.isFinite(annualCreditSales) || !Number.isFinite(improvementDays) || annualCreditSales < 0 || improvementDays < 0) return 0;
  return annualCreditSales / 365 * improvementDays;
}
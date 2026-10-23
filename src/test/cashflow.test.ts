import { describe, expect, it } from 'vitest';
import { FORECAST_WEEKS, workingCapitalReleased } from '../lib/cashflow';
describe('Cashflow rules', () => {
  it('offers a forecast of up to 13 weeks', () => expect(FORECAST_WEEKS).toBe(13));
  it('releases about £8,219 for £1,000,000 sales and three fewer DSO days', () => {
    expect(workingCapitalReleased(1_000_000, 3)).toBeCloseTo(8219.178082, 5);
    expect(Math.round(workingCapitalReleased(1_000_000, 3))).toBe(8219);
  });
  it('uses annual sales divided by 365 times the reduction in days', () => expect(workingCapitalReleased(365_000, 5)).toBe(5000));
  it('does not estimate a release without a DSO reduction', () => expect(workingCapitalReleased(1_000_000, 0)).toBe(0));
});
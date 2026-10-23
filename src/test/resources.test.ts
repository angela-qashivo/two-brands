import { describe, expect, it } from 'vitest';
import { CASH_GAP, WEBINAR } from '../lib/resources';
describe('Resource launch safeguards', () => {
  it('does not offer the guide before an approved PDF is supplied', () => expect(CASH_GAP.available).toBe(false));
  it('does not publish an unconfirmed webinar date', () => expect(WEBINAR.confirmedDate).toBeNull());
  it('registers webinar interest rather than a confirmed event booking', () => expect(WEBINAR.registration).toBe('interest-only'));
});
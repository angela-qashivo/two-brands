import {describe,it,expect} from 'vitest';
import {products} from '../lib/products';
describe('Product audience separation',()=>{
 it('keeps Qashivo SME-focused',()=>{expect(products.qashivo.audience).toBe('FOR SMEs');expect(products.qashivo.steps).toEqual(['Connect','Prioritise','Communicate','Understand','Escalate','Collect']);});
 it('keeps Qonfirm Invoice Finance-focused',()=>{expect(products.qonfirm.audience).toBe('FOR INVOICE FINANCE');expect(products.qonfirm.steps).toEqual(['Portal','Invite','Select','Issue','Follow up','Report']);});
 it('retains independent third-party issuance',()=>{expect(products.qonfirm.details[3]).toBe('Verification requests are sent independently through a third-party auditor.');});
});

import {describe,it,expect} from 'vitest';
import {ENQUIRY_TYPES,validateEnquiry} from '../lib/enquiry';
const base={name:'Jo',company:'Acme',email:'jo@acme.com',enquiry_type:'General enquiry',message:'',wants_demo:false};
describe('Enquiry form',()=>{
 it('offers exactly the three enquiry types',()=>{expect(ENQUIRY_TYPES).toEqual(['Qashivo / SME credit control','Qonfirm / Invoice Finance','General enquiry']);});
 it('rejects an unknown enquiry type',()=>{expect(validateEnquiry({...base,enquiry_type:'Other'})).not.toBeNull();});
 it('rejects an invalid email',()=>{expect(validateEnquiry({...base,email:'nope'})).not.toBeNull();});
 it('accepts a complete enquiry',()=>{expect(validateEnquiry(base)).toBeNull();});
});

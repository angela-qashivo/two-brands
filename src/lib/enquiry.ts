export const ENQUIRY_TYPES = ['Qashivo / SME credit control', 'Qonfirm / Invoice Finance', 'General enquiry'] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export type EnquiryInput = { name: string; company: string; email: string; enquiry_type: string; message: string; wants_demo: boolean };

export function validateEnquiry(e: EnquiryInput): string | null {
  if (!e.name.trim() || e.name.length > 120) return 'Please enter your name.';
  if (!e.company.trim() || e.company.length > 160) return 'Please enter your company.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email.trim()) || e.email.length > 254) return 'Please enter a valid email address.';
  if (!(ENQUIRY_TYPES as readonly string[]).includes(e.enquiry_type)) return 'Please choose an enquiry type.';
  if (e.message.length > 4000) return 'Please keep your message under 4,000 characters.';
  return null;
}

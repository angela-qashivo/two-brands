import business from '@/assets/accounting-business-header.jpg.asset.json';
import accountants from '@/assets/accounting-partner-header.jpg.asset.json';
import lenders from '@/assets/accounting-lender-header.jpg.asset.json';

export const solutionPhotos = {
  business: { url: business.url, alt: 'Finance team reviewing financial reports together' },
  accountants: { url: accountants.url, alt: 'Accounting colleagues reviewing documents beside a laptop' },
  lenders: { url: lenders.url, alt: 'Calculator and financial accounts prepared for review' },
} as const;
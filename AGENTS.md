<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep product audience data in `src/lib/products.ts` and reusable presentation in `src/components/site.tsx` so audience separation is consistent across all pages.
- Use separate TanStack content routes with leaf head metadata and a shared Site shell so every navigation destination is independently accessible.
- Store demo and contact enquiries in the Cloud `enquiries` table (anonymous insert-only, no public reads) so every submission has a real destination.
- Use transparent logo assets with light-lettering derivatives for dark surfaces and a square brand-derived favicon to retain readability without backgrounds.
- Theme via CSS tokens: Paper is the default ground; hero, header, footer and closing bands get Night tokens by selector; per-product signal comes from `--product`/`--product-ink` set by `.product-cyan`/`.product-green` (Site takes a `product` prop), so components never hardcode a product colour.
- Reuse `marketing.tsx` for audience presentation and `BusinessPage` for both business URLs to keep messaging and controls consistent without duplicating product pages.
- Share photographic heroes, approved explainer stills and visual sequences through `marketing.tsx`; label video-derived interfaces as illustrative rather than live software screenshots to preserve provenance.
- Keep forecast limits, working-capital calculations and resource availability in browser-safe library modules with focused tests so financial rules and launch safeguards remain explicit.
- Route partner and webinar enquiries through the existing enquiry form with contextual messages so submissions retain the established destination and anonymous insert-only permissions.

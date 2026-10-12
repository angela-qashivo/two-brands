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
- Keep demo enquiry preparation client-only until a real booking or delivery destination is supplied; never imply the enquiry was sent.
- Use transparent logo assets with light-lettering derivatives for dark surfaces and a square brand-derived favicon to retain readability without backgrounds.

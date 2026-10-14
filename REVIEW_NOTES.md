# Southlink website refresh — review draft

This document records the implementation and local validation. GitHub's pull request and deployment run provide the publication status.

## What the reference actually does

The requested section at https://leceylan.me/en/destinations/sri-lanka/tours/ combines a “Your journey” introduction with substantial itinerary cards: travel style, title, duration, description, highlights and a customisation action. The implementation adopts that information hierarchy with Southlink's own content, logo and colours. It does not copy reference itineraries, testimonials, photographs or service promises.

## Research and missing information

| Item | Finding | Treatment |
| --- | --- | --- |
| Logo | The repository already contains `465783363_9252827688063656_8610685735369917870_n.jpg`, a red SL aircraft emblem. | Reused in the header, footer, manifest and logo metadata. An original vector asset would improve sharpness; no invented replacement. |
| Live domain | https://southlinktravels.lk/ serves the existing Gatsby site and is indexed with its current content. | Corrected canonical, sitemap, robots and sender-domain references that previously used `.com`. |
| Email | Sri Lanka Civil Aviation Authority's March 23, 2026 list records `stlink@sltnet.lk`. | Used for the public contact address and form recipient. Delivery still needs a real cPanel mail test before release; none has been sent. |
| Telephone | The same CAA source and multiple business listings agree on `0912234517`. | Displayed as `0094 91 223 4517`; dial links use `+94912234517`. Existing configured WhatsApp number retained, because alternative mobile numbers in directories cannot establish the correct current WhatsApp contact. |
| Office | CAA lists Level 3, Selaka Complex, No. 34, Gamini Mawatha, Galle. | Replaces the raw map plus code. |
| Founding date | Owner specifies 1991; the supplied 2019 newspaper says operations began in 1992 and calls the event a 25th anniversary. These do not independently reconcile. | Uses “since 1991” on the homepage, About page and footer according to the owner's instruction. Treat this as owner-supplied history, not a date independently verified by the newspaper. |
| Accreditation | The newspaper describes IATA accreditation in 2019. The March 2026 CAA record is licence A 246, with a listed expiry of 20 August 2026. | Does not assert present accreditation or display an IATA badge based on historical evidence. CAA and IATA are different credentials. |
| Tour images | The old tour JSON referenced files absent from the repository. | All 43 tours now have local destination photographs. Forty additional Wikimedia photographs join the previously sourced Sigiriya, Ella and Mirissa images. Galle uses an actual aerial photograph of the fort. Author, source and licence records are on `/photo-credits/`. |

Sources:

- CAA March 2026 list: https://caa.lk/images/pdf/2026_March/Web_List_Query_23_March_2026.pdf (printed page 114).
- Corroborating phone/address listing: https://rainbowpages.lk/weddings/travel-agents/southlink-travels/
- Existing live About page: https://southlinktravels.lk/about/
- Newspaper clipping supplied in this conversation: Daily News, Business / Travel & Aviation, 6 February 2019. Stored at `static/images/southlink-history.png`.
- Wikimedia file/author/licence links are included on `/photo-credits/`.

## Implemented

- Responsive homepage from discovery and travel styles through itinerary cards, company history and trip customisation.
- Shared logo/navigation/footer, clear About and Contact links, mobile menu with Escape handling, keyboard focus styles, skip link and reduced-motion support.
- Responsive tour listings and detail pages; correct category matching, search, empty state and consistent links.
- Trip enquiry form with itinerary/destination prefill and editable dates, party size, duration and interests. Prepares a WhatsApp link for the visitor to review and send. No enquiry is silently sent or claimed as submitted.
- Removes package prices from source tour content, cards, details, structured data, and CMS controls. Transfers now request a quote too.
- About page with company history and readable newspaper archive.
- One public contact email source: the Gatsby build emits `contact-settings.json` for the PHP handler.
- Responsive image generation through Gatsby for the hero, tour photographs and newspaper archive. Mobile browsers receive smaller WebP versions; tour images load lazily.
- Enquiry form rejects whitespace-only required fields and past dates, and moves keyboard focus to the prepared enquiry. WhatsApp QR dialog traps focus, closes with Escape, restores focus and locks background scrolling.
- Deployment workflow and `.nvmrc` use Node 22. FTP deployment explicitly disables `dangerous-clean-slate`, which otherwise deletes all contents of the configured server directory. This changes the local workflow only; no deployment has run.

## Release considerations

The configured hosting path is: a push to GitHub `main` (or a manual Actions run) installs dependencies, lints, builds Gatsby, then uploads `public/` over FTPS to `FTP_REMOTE_DIR`. cPanel serves that generated website and executes the PHP contact handler; it does not need to run the Gatsby development server. Decap CMS is configured to write content to the same GitHub repository's `main` branch, so publishing CMS changes also reaches this deployment trigger. Actual CMS authentication and the server destination still require verification in the connected accounts.

- Confirm the current email inbox before release. Online listings are evidence, not a test of inbox ownership or delivery. The founding year follows the owner's requested 1991 wording; the newspaper discrepancy is recorded above.
- Contact form delivery, PHP `mail()` and `mbstring`, and SPF/DKIM on cPanel need a server-side check. The local preview serves static files and cannot prove mail delivery.
- No cPanel session was accessible through browser automation in this conversation. The precise document root and secret values remain unverified.
- Verify `FTP_REMOTE_DIR` against the domain's cPanel document root and back up that directory before the first deployment. The full-directory wipe is now disabled, but normal deployment still replaces files and may remove previously tracked files. Action reference: https://github.com/SamKirkland/FTP-Deploy-Action#settings.
- The existing dependency install reports 106 audit findings (including 2 critical). No blind dependency upgrades were applied during the visual/content refresh. Treat dependency remediation as a separate tested change.
- Node 22 is used both locally and in the draft workflow. The machine's default Node 26 is outside several Gatsby packages' declared support range.
- Photographs illustrate destinations and are not promises of particular hotels or wildlife sightings. Bespoke company photography can replace the licensed images through the CMS.

## Validation completed

- Production build: successful, 57 Gatsby pages generated.
- ESLint: no errors; one pre-existing unused-variable warning in `src/utils/discord.js`.
- Browser: 66 page/viewport checks across 320, 390, 768, 1024, 1440 and 1920 pixels. No page-level horizontal overflow or JavaScript page errors in the checked routes.
- Interaction checks: mobile navigation and Escape; category link; search; selected itinerary and destination prefill; prepared WhatsApp recipient/message; editing invalidates the prepared enquiry; international phone/email links; mocked contact success/failure. No real message was sent.
- Build artifact checks: 58 HTML files have resolving local links/assets; 60 public JSON files contain no package prices, old email addresses or old canonical domains. Generated mail recipient matches settings.
- Screenshots and browser results are saved in the sibling `../review/` directory.
- Final screenshot checks loaded every photograph in both catalogues, verified the expanded credits page at mobile and desktop widths, and checked the WhatsApp dialog at 320 px. All 43 generated tour detail pages contain responsive image data.
- Catalogue completeness: 43 tours retained, all with local destination photographs; 40 additional source/author/licence records in `src/data/destination-photo-credits.json` and three existing credits on the credits page.
- Additional browser checks pass for whitespace-only names, past dates, enquiry focus, QR focus cycling, Escape dismissal, focus restoration and scroll restoration. At 390 px with device scale 1, the hero loaded a 59,808-byte WebP instead of the previous approximately 688 KB fixed AVIF asset. This is an image transfer measurement, not a Lighthouse performance score.

## Hydration and manifest correction

The prior homepage query omitted `fields.slug`; prior tour listings and detail pages used `inboundJson` / `outboundJson` aliases. Mixing those older cached page-data responses with the new JavaScript caused the reported `slug` and `nodes` exceptions. Chromium reproduced the slug failure when the fields were removed from page-data.

The correction accepts both query shapes, resolves known legacy tour titles to their established routes, avoids undefined itinerary links, and declares non-null slug fields in the build schema. HTML, JSON and the manifest now revalidate rather than relying on heuristic caching. The manifest has an explicit MIME type and uses credentials so the host's verification cookie accompanies its browser request. A regular Chromium session confirmed the current live page-data is valid; unauthenticated manifest requests received an HTML verification page.

Regression checks inject missing slug fields and the legacy query aliases into real browser responses, then test direct page loads, navigation, search and itinerary links. Current page-data and the generated manifest also remain covered by the normal build and browser checks.

## Local use

Use Node 22, then `npm ci --legacy-peer-deps`, `npm run lint`, `npm run build`, and `npm run serve -- --host 127.0.0.1 --port 9000`.

The branch is `feat/southlink-travel-refresh`. Review locally before merging to `main`, because pushes to `main` trigger the existing deployment workflow.

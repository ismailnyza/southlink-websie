# Southlink Travels — Design System & Frontend Guidelines

## Project Identity

**Southlink Travels** is a premium, IATA-accredited travel agency in Galle, Sri Lanka (est. 2009). The website serves travellers booking flights, Sri Lanka tours, event tickets, visa help, and corporate travel — all handled by a real, human team that answers the phone.

**Subject:** A travel agency with deep local roots in Galle, Southern Sri Lanka — not a faceless booking engine. The brand promise is *personal, human service* backed by 15+ years of expertise.

**Primary audience:** Sri Lankans booking international travel, diaspora travellers, tourists planning Sri Lanka trips, and corporate clients.

**The page's single job:** Convert visitors into WhatsApp conversations with a real agent. Every design decision serves that funnel.

---

## Design Token System

**Design direction:** *Galle Fort at Golden Hour* — warm, textured, rooted in place. Colors draw from the materials of Galle: whitewashed coral-stone walls, terracotta roof tiles, the deep indigo ocean at dusk, warm tropical light.

### Color Palette

| Token | Hex | Role |
|---|---|---|
| Terracotta (red-600) | `#C46B4E` | CTAs, interactive elements, accent marks, emergency section bg |
| Terracotta dark (red-700) | `#9E4F35` | Hover states, deeper accent |
| Terracotta light (red-400) | `#D4947A` | Eyebrows on dark backgrounds |
| Terracotta pale (red-50) | `#FCF5F2` | Tint backgrounds, selection |
| Midnight (gray-900) | `#171C23` | Hero/footer backgrounds — softer than pure black, like dusk |
| Cream (page bg) | `#FCFAF7` | Page body background — warmth without the template cliché |
| Stone (gray-50) | `#F4F1EA` | Subtle section backgrounds, card backgrounds |
| White | `#FFFFFF` | Card backgrounds on cream pages |
| Gold (amber-400) | `#D4A34A` | Star ratings only |
| Green (green-500) | `#25A951` | WhatsApp buttons, online status indicator |
| Charcoal (text) | `#2D2A28` | Primary body text — slightly warm |
| Warm grays | `#6B6359` – `#A0988A` | Secondary/muted text |

**Rules:**
- Terracotta is the *only* accent for interactive elements. No blue links, purple CTAs, or other accent hues.
- Gold is reserved for star ratings. Green is reserved for WhatsApp/online indicators.
- Backgrounds alternate: midnight (gray-900) for hero/page headers, cream `#FCFAF7` for body, white for cards, stone (gray-50) for subtle breaks.
- The page body defaults to cream via `body { @apply bg-[#FCFAF7] }` — individual sections use `bg-white` for cards and `bg-gray-50` for subtle shifts.

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Playfair Display (serif) | 700 (bold) | Page titles, section headings, hero text. Use `.font-serif` / `font-serif` |
| Body / UI | Inter (sans-serif) | 400–600 | Body text, labels, buttons, nav, filters, all UI elements. Use `.font-sans` / `font-sans` |

**Type scale (approximate):**
- Hero heading: `text-4xl` to `text-7xl` (responsive), leading-tight (`1.05`)
- Section headings: `text-3xl` to `text-5xl`, leading-tight
- Body: `text-sm` to `text-lg`, leading-relaxed
- Labels/eyebrows: `text-xs`, uppercase, `tracking-[0.2em]`, `font-semibold`
- Buttons/CTAs: `text-sm` to `text-base`, `font-semibold` or `font-bold`

**Rules:**
- Playfair Display is for headings only. Never use it for body text, labels, buttons, or UI chrome.
- Inter is for everything else. Never use it for page/section headings.
- The red period/dot in "Southlink." is a brand mark — preserve it in logo contexts.

### Layout

- **Max width:** `max-w-7xl` for full-width content sections, `max-w-4xl` for text-heavy pages, `max-w-2xl` for centered CTA sections
- **Padding:** `px-5 sm:px-8 lg:px-10` for content sections
- **Vertical rhythm:** Section padding is `py-24 sm:py-32` for major sections, `py-16` to `py-20` for secondary
- **Nav:** Fixed top, `h-16`, glass-morphism (`bg-white/85 backdrop-blur-xl`), red dot in logo
- **Cards:** `rounded-2xl` or `rounded-3xl`, subtle `border border-gray-100`, `shadow-sm` default, hover to `shadow-lg`/`shadow-xl`
- **Buttons:** `rounded-full` (pill), minimum `px-8 py-4`, red fill for primary, outlined/ghost for secondary
- **Page headers:** Dark (`bg-gray-900`) with centered text, red eyebrow label, serif heading, gray-400 supporting text
- **Footer:** Dark (`bg-gray-900`), multi-column grid, language links

### Signature Element: Rampart Divider

A subtle wavy horizontal rule inspired by the contour lines of Galle Fort's UNESCO bastion walls on old Portuguese and Dutch nautical charts. Applied as a CSS class:
- `.rampart-divider` — light version for cream/white backgrounds (stroke: `#DDD7CD`)
- `.rampart-divider-dark` — dark version for midnight backgrounds (stroke: `#242A33`)

Use between major content sections to give the site a distinctive, non-generic visual identity tied directly to Galle's cartographic heritage.

### Spacing & Component Patterns

- Card grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5` or `gap-6`
- Service cards: Subtle terracotta tint gradient on hover, icon + title + description, "Explore →" on hover
- Filter pills: `rounded-full`, `text-xs font-semibold`, terracotta when active, stone (gray-100) when inactive
- Section eyebrows: Terracotta (`text-red-600`), `text-xs font-semibold uppercase tracking-[0.2em]`, placed above section heading
- Dividers: Hairline `border-t border-gray-100` or `border-gray-800` (on dark), plus `.rampart-divider` for signature moments

---

## Design Principles for Southlink

### Ground every page in the subject

Southlink is a Galle-based travel agency, not a SaaS or a generic booking platform. Every design choice should feel grounded in travel, Sri Lanka, and human service. Use real destinations, real route data, real phone numbers. The warmth and texture of Sri Lanka (its beaches, tea country, wildlife, heritage) should come through without being kitsch.

### The hero is a thesis

The hero section must immediately communicate: *real people in Galle handle your travel — not a chatbot, not a call center.* Use direct, confident copy. The current hero ("Travel, handled personally.") is strong. Don't dilute it with generic travel imagery or stock-video clichés.

### Typography carries personality

Playfair Display is characterful and editorial — it signals *established, trustworthy, premium* without feeling corporate. Inter is clean and highly readable. This pairing works. Don't swap them. Don't add a third font family. Let the contrast between the editorial serif and the workhorse sans-serif do the work.

### Terracotta as place

The terracotta (#C46B4E) is warm, grounded, and specific to Sri Lanka — the color of Galle's clay roof tiles, the earth after rain, the warm glow of a tropical dusk. It says "we're from here" as much as "we're here for you." Used for CTAs, the emergency section background, the logo dot, and interactive states. Keep it the sole accent.

### The rampart line is our signature

Every section divider doesn't need to be special — but the ones between major narrative moments use `.rampart-divider`, a subtle wavy line inspired by Galle Fort's contour on old nautical charts. It's the one element this site owns that no other travel site has. Use it sparingly: between hero and services, before the emergency section, between major content blocks. Not between every section.

### Structure is information

The page structure mirrors the service: hero (who we are) → price ticker (what we do, live) → rampart divider → services (what we offer) → Sri Lanka imagery (where we're from) → testimonials (social proof) → guarantee (why us) → rampart divider → emergency (we're here when it matters) → CTA (talk to us). This is a deliberate narrative. New pages should follow a similar logic: dark header establishing the topic, then content, then a CTA or related links.

### Motion is deliberate, not decorative

- Framer Motion is available for page transitions and hover states
- Prefer one orchestrated entrance animation over scattered micro-effects
- The price ticker animation (CSS `@keyframes ticker`) is a signature element — pause on hover
- `prefers-reduced-motion` is respected globally
- Avoid scroll-triggered reveals as decoration; use them only when they serve the content narrative

---

## Component Reference

### Nav (`layout.tsx`)
Fixed, glass-morphism, logo with red dot, nav links (Flights, Tours, Packages, Events, Corporate, Visa), 24/7 Help link, Contact (WhatsApp) CTA button.

### Footer (`layout.tsx`)
Dark background, 4 columns: brand intro + contact, Services links, Company links, Contact details. Language switcher row at bottom.

### Price Ticker (`PriceTicker.tsx`)
Client component. Infinite scrolling ticker showing route + fare range. CSS animation, pauses on hover. Pass `prices` array of `{route, from, to}`.

### AI Concierge (`AIConcierge.tsx`)
Client component. Floating FAB (bottom-right), expands to chat window. Dark header, message bubbles (user = red, assistant = white with border). Input with send button. "Type 'team' for a real person" hint. Posts to `/api/chat`.

### Page Header Pattern
Every page follows: `bg-gray-900 text-white py-20` with centered `max-w-4xl`, red eyebrow (`text-red-400`), serif `h1`, gray-400 supporting paragraph.

### Card Patterns
- **Service cards:** Full-bleed gradient, icon emoji, title, description, hover "Explore →"
- **Content cards:** White bg, `rounded-2xl`, `border border-gray-100`, `shadow-sm` → hover `shadow-lg`
- **Testimonial cards:** White bg, `rounded-2xl`, stars (amber), italic quote, attribution

### Filter Components
Pill-style toggle buttons: `rounded-full`, `text-xs font-semibold`, red (`bg-red-600 text-white`) when active, gray (`bg-gray-100 text-gray-600`) when inactive.

### CTAs
- Primary: `bg-red-600 hover:bg-red-700 text-white rounded-full`, pill shape, shadow with red tint
- Secondary: `bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/25` (on dark)
- Tertiary: `border-2 border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600` (on light)
- WhatsApp: `bg-green-500 hover:bg-green-600 text-white rounded-full`

---

## Writing Guidelines

### Voice
Confident, direct, human. Not salesy. Not corporate. A travel agent talking to a customer.

### Rules
- **Plain verbs, active voice:** "Find Flights" not "Search for flight options." "Message Us" not "Get in touch."
- **Sentence case for all UI:** Labels, buttons, nav items — never Title Case.
- **Be specific, not clever:** "Flights from Colombo to 30+ destinations" not "Your journey begins here."
- **Consistency:** Same action keeps same name. "Enquire" on tour cards opens WhatsApp. "Get price" on flight cards opens WhatsApp. Don't vary the verb for the same outcome.
- **Emergencies are serious:** The emergency section uses plain, urgent language. No exclamation marks. No jokes.
- **Empty states show direction:** "No routes match your filters. Try broadening your search or message us — we'll find options for you."
- **Errors don't apologize:** "Connection issue. Reach us on WhatsApp — we respond quickly." Not "Sorry, something went wrong."

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 with `@theme` custom properties
- **Animation:** Framer Motion (client components), CSS keyframes (ticker, fade-up)
- **Icons:** Inline SVGs (hand-crafted, no icon library dependency except lucide-react available)
- **AI:** OpenAI API (`/api/chat`)
- **Fonts:** next/font/google — Inter (sans), Playfair Display (serif)

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, fonts, metadata)
│   ├── globals.css         # Tailwind, @theme, @layer, keyframes
│   ├── (home)/page.tsx     # Homepage
│   ├── flights/page.tsx    # Flight search + route listing
│   ├── tours/page.tsx      # Sri Lanka tours
│   ├── tours/outbound/     # International/outbound tours
│   ├── packages/page.tsx   # Travel packages
│   ├── events/page.tsx     # Concert & sports tickets
│   ├── visa/page.tsx       # Visa guidance
│   ├── corporate/          # Corporate travel, events, educational
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact
│   ├── trust/              # Guarantee & reviews
│   ├── emergency/page.tsx  # 24/7 emergency help
│   ├── faq/page.tsx        # FAQ
│   ├── guides/page.tsx     # Travel guides
│   ├── diaspora/page.tsx   # Diaspora services
│   ├── airport-transfer/   # Airport transfers
│   ├── [de|fr|zh|ar]/      # Language-specific landing pages
│   └── api/chat/route.ts   # AI concierge API endpoint
└── components/
    ├── PriceTicker.tsx      # Infinite scrolling price ticker
    └── AIConcierge.tsx     # Floating AI chat widget
```

---

## Design Process for New Pages

1. **Start with the content:** What does this page need to say? What action should the user take?
2. **Follow the page header pattern:** Dark header, red eyebrow, serif heading, supporting text.
3. **Choose the right card pattern:** Content cards for listings, service cards for feature grids.
4. **End with a CTA:** Every page should end with a path to WhatsApp or the flights/tours pages.
5. **Use real data:** Routes, prices, tour names, phone numbers — real content makes the design credible.
6. **Respect the token system:** No new colors without justification, no new font families, no new button styles.

## Self-Critique Checklist

Before considering a new design complete, verify:
- [ ] Red is the only accent color used for interactive elements
- [ ] Playfair Display is only used for headings, Inter for everything else
- [ ] The red dot appears in "Southlink." in the logo
- [ ] `prefers-reduced-motion` is respected
- [ ] Focus states are visible (`focus-visible` with red outline)
- [ ] Copy is active voice, sentence case, specific
- [ ] Page ends with a clear path to contact/WhatsApp
- [ ] Section padding follows the established rhythm
- [ ] No new design patterns introduced without updating this document
- [ ] The design feels like Southlink, not a generic travel site

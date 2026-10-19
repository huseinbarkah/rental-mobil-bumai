# Bumai Rentcar (BMR) — Website Design System

**Design direction:** Premium, minimal, photography-led rental car company profile  
**Brand:** Bumai Rentcar (BMR)  
**Primary market:** Sumbawa Besar and surrounding areas, West Nusa Tenggara, Indonesia  
**Primary conversion:** WhatsApp inquiry and booking  
**Reference principle:** Tesla-inspired restraint and product-focused photography, adapted to BMR's turquoise-and-gold brand identity and local transport services.

---

## 1. Visual Theme & Atmosphere

Bumai Rentcar's website should feel dependable, calm, modern, and connected to travel in Sumbawa. Use a restrained premium layout inspired by Tesla's photography-first approach, but do not copy Tesla's blue palette, automotive-sales language, or vehicle-ordering experience. BMR is a rental and transport service, so the interface must help visitors understand services, compare available vehicle options, and contact the business quickly.

The visual identity is built around **turquoise, golden yellow, and white**. Turquoise reflects the sea and coastal character visible in BMR's existing logo and promotional artwork. Golden yellow is a recognizable highlight from the logo and should guide attention to the main booking action. White and warm off-white surfaces create breathing room around vehicle photography and content.

Use authentic BMR vehicle and business photographs whenever available. Destination photography may support the Sumbawa travel context, but it must not imply that a location, vehicle, facility, or service belongs to BMR unless that is accurate. Avoid relying on generated-looking collages, excessive icons, thick decorative strokes, large shadows, gradients, and stacked cards.

The website should communicate three things quickly:
1. What transport services BMR provides.
2. Which vehicles or vehicle categories can be requested.
3. How to ask about availability, pricing, and booking through WhatsApp.

### Key Characteristics

- Photography-led hero featuring an authentic BMR vehicle or verified fleet photo.
- Minimal navigation with clear labels and one prominent WhatsApp CTA.
- Turquoise as the main brand color, golden yellow as a restrained action accent, and white as the dominant surface.
- Large, legible typography with a clear heading/body hierarchy.
- Flat or nearly flat components; use spacing and photography for depth instead of decorative shadows.
- Responsive layouts designed mobile-first, including visitors arriving from Instagram, Facebook, or WhatsApp.
- No autoplay hero carousel by default; use one strong image to keep the experience fast and focused.
- WhatsApp contact access throughout the site without covering important content.
- Smooth, restrained transitions around 200–330ms; respect `prefers-reduced-motion`.
- Optimize images and defer loading of below-the-fold media.

---

## 2. Color Palette & Roles

The following values are proposed digital design tokens based on the visual direction of the supplied BMR logo and posters. They are not a laboratory-extracted color match. If an official SVG or high-quality logo file becomes available, sample and verify the brand colors before final production.

### Primary Brand Colors

- **BMR Turquoise — `#168F83`**: Main brand color for selected navigation states, brand accents, links, icons, and occasional section backgrounds. This is a turquoise/teal hue, not a conventional dark forest green.
- **Deep Turquoise — `#08665F`**: Darker supporting shade for footer backgrounds, high-contrast brand sections, hover states, and dark text treatments where needed.
- **Golden Yellow — `#FFC928`**: Main accent for the primary WhatsApp CTA, small highlights, active indicators, and important booking cues. Use sparingly so it retains visual priority.
- **Pure White — `#FFFFFF`**: Main page canvas, navigation surface, fleet section, and form backgrounds.

### Surface & Background

- **White Canvas — `#FFFFFF`**: Default page and content background.
- **Warm Off-White — `#F7F9F7`**: Alternate section background for gentle separation without introducing heavy cards.
- **Pale Turquoise — `#DDF3EE`**: Optional soft background for small informational panels, labels, or service highlights. Do not use it behind every section.
- **Deep Turquoise Surface — `#08665F`**: Use selectively for the footer, a strong CTA section, or a brand-focused band. Do not make the entire site dark.

### Neutrals & Text

- **Primary Text — `#17211F`**: Main headings, navigation labels, and body copy on light surfaces.
- **Secondary Text — `#59635F`**: Supporting descriptions, captions, and metadata.
- **Muted Text — `#737D78`**: Less important labels; verify contrast before using for small text.
- **Soft Border — `#E1E7E3`**: Dividers, form borders, and subtle boundaries.
- **Disabled Surface — `#EEF1EF`**: Disabled controls or unavailable UI states.

### Color Usage Rules

- Start with an approximate balance of **60% white/off-white, 30% turquoise family, and 10% golden yellow**. This is a visual guideline, not a strict mathematical rule.
- Use turquoise to establish brand identity, not as a background for every section.
- Use golden yellow primarily for the main CTA and a few deliberate highlights.
- Use dark text on yellow buttons (`#17211F` or `#173D37`) and white text on sufficiently dark turquoise surfaces.
- Do not use white text on the brighter turquoise `#168F83` for small text unless contrast is verified. Prefer `#08665F` for white-on-turquoise combinations that need stronger contrast.
- Do not introduce Tesla's Electric Blue (`#3E6AE1`) as a BMR brand color.
- Avoid gradients, neon glow, glassmorphism, and multiple competing accent colors.

### Suggested CSS Tokens

```css
:root {
  --color-brand: #168F83;
  --color-brand-dark: #08665F;
  --color-accent: #FFC928;
  --color-background: #FFFFFF;
  --color-background-muted: #F7F9F7;
  --color-background-turquoise-soft: #DDF3EE;
  --color-text: #17211F;
  --color-text-secondary: #59635F;
  --color-text-muted: #737D78;
  --color-border: #E1E7E3;
  --color-disabled: #EEF1EF;
}
```

---

## 3. Typography Rules

Use a modern, readable sans-serif such as **Inter**, `Arial`, or the system sans-serif stack. Do not claim to use Tesla's proprietary Universal Sans. A practical stack is:

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
```

### Suggested Hierarchy

| Role | Desktop | Mobile | Weight | Guidance |
|---|---:|---:|---:|---|
| Hero headline | 48–64px | 34–42px | 600–700 | Clear benefit-led message; avoid excessively long lines |
| Section heading | 32–40px | 26–32px | 600 | One clear message per section |
| Service/fleet title | 18–22px | 18–20px | 600 | Short and scannable |
| Navigation | 14–16px | 16px | 500 | Readable, not cramped |
| Body text | 16–18px | 15–16px | 400 | Aim for 1.5–1.7 line height |
| Button label | 14–16px | 14–16px | 600 | Action-oriented language |
| Caption/metadata | 12–14px | 12–14px | 400–500 | Use only for supporting information |

### Typography Principles

- Prioritize legibility over decorative styling.
- Use a restrained weight range, typically 400, 500, 600, and 700 where needed.
- Avoid script fonts for primary headings and avoid all-caps for long navigation labels or paragraphs.
- Use sentence case for navigation and CTA labels.
- Keep heading line lengths manageable, especially on mobile.
- Do not place important text directly over a busy photo unless the contrast is reliable. If an overlay is necessary, use a restrained solid or translucent dark-turquoise panel rather than a decorative gradient.

---

## 4. Component Styling

### Buttons

Use simple rectangular buttons with modest rounding. Suggested radius: **4–8px**. Avoid oversized pill buttons unless the existing BMR brand specifically requires them.

**Primary CTA — WhatsApp / booking inquiry**
- Background: `#FFC928`.
- Text: `#17211F` or `#173D37`.
- Minimum height: 44–48px.
- Padding: approximately 12px 20px.
- Radius: 6px.
- Label examples: “Tanya via WhatsApp”, “Konsultasi Pemesanan”, “Cek Ketersediaan”.
- Hover: slightly darken the yellow or add a subtle border; preserve text contrast.
- Must open the correct verified BMR WhatsApp number with a useful prefilled message.

**Secondary CTA**
- Background: transparent or white.
- Text: `#17211F` on light surfaces; white on sufficiently dark turquoise.
- Border: 1px solid `#D3DDD7` on light surfaces or white on dark surfaces.
- Label example: “Lihat Armada”.

**Text links**
- Use `#08665F` on light backgrounds.
- Underline on hover/focus where appropriate.
- Maintain visible keyboard focus states.

### Navigation

- Desktop: BMR logo/wordmark on the left, primary links in the middle or right, and one WhatsApp CTA.
- Suggested menu: **Beranda, Layanan, Armada, Tentang Kami, Kontak**.
- Keep the header compact and legible; avoid multiple competing buttons.
- Over a hero image, use a transparent header only if the logo and menu remain readable. Otherwise start with a white or lightly translucent header.
- On scroll, a white background with a subtle bottom border may be used. Do not depend on heavy shadows.
- Mobile: hamburger menu with accessible labels, clear open/close behavior, and a visible booking CTA.
- Do not use Tesla-specific menu labels such as Vehicles, Energy, Charging, Discover, or Shop.

### Fleet Items

- Prefer a clean grid with authentic vehicle photography and consistent image ratios.
- Use a white or off-white surface with spacing rather than a heavy card border and shadow.
- Each vehicle item may include only verified information: vehicle name, category, passenger capacity, luggage capacity, transmission, rental conditions, and price if confirmed.
- If pricing depends on destination, duration, driver, fuel, or other terms, show “Tanyakan tarif” rather than inventing a fixed price.
- Add a “Tanya ketersediaan” WhatsApp action that includes the vehicle name in the prefilled message.
- Do not imply that every vehicle shown in the poster is currently available. Confirm fleet inventory before publication.

### Service Items

Present the four services described in the company profile:
1. Rental mobil dengan driver.
2. Antar-jemput bandara.
3. Trip wisata Sumbawa.
4. Jasa angkutan barang.

Use a simple icon only when it improves scanning. Each service should have a short description, relevant audience/use case, and an inquiry CTA. Do not invent package names, route coverage, included amenities, or service guarantees.

### Forms

- Use white fields with a clear `#E1E7E3` border and text `#17211F`.
- Provide visible labels; do not rely on placeholders alone.
- Inputs should have comfortable touch targets and clear focus/error states.
- A request form can ask for service type, pickup location, destination, date/time, passenger or cargo needs, and contact details only when those fields are necessary.
- Explain that submitting an inquiry does not confirm a booking until BMR confirms availability and terms.
- Keep WhatsApp as the primary contact path unless the business explicitly requests a more complex booking system.

### WhatsApp Contact Access

- Provide a persistent but unobtrusive WhatsApp entry point if it does not cover content or other controls.
- On mobile, keep it clear of browser safe areas and avoid overlapping sticky buttons.
- Do not add a fake chatbot or pretend that a booking is confirmed automatically.
- The poster and company profile show these contact numbers: `0823-4071-3658` and `0852-5833-9073`. Confirm which number should be the primary CTA and verify WhatsApp availability before deployment.

---

## 5. Page Structure & Content Strategy

### Main Navigation and Pages

1. **Beranda** — value proposition, services overview, featured fleet, trust points, booking CTA, operating area, and contact summary.
2. **Layanan** — detailed explanations of rental with driver, airport transfers, Sumbawa trips, and goods transport.
3. **Armada** — available vehicles and verified vehicle details.
4. **Tentang Kami** — company profile, vision, mission, service approach, and real company documentation.
5. **Kontak** — verified phone/WhatsApp details, office location, operating area, and optional inquiry form.

FAQ and a photo gallery can initially be sections on the homepage rather than separate pages. A travel blog or destination landing pages can be added later when BMR has the capacity to maintain useful, accurate content.

### Homepage Section Order

1. **Hero:** one strong real vehicle/travel photograph, clear headline, short description, primary WhatsApp CTA, and secondary fleet CTA.
2. **Service overview:** four services with concise descriptions.
3. **Featured fleet:** a small selection of confirmed available vehicle types.
4. **Why BMR:** fleet care, experienced drivers, flexible service, and transparent pricing—only to the extent these claims can be supported.
5. **How booking works:** choose a service/vehicle, send trip details, receive availability and price confirmation, then confirm directly with BMR.
6. **Sumbawa travel context:** optional destination photography or trip information that accurately reflects the services BMR offers.
7. **FAQ:** common questions about service area, rental duration, driver, pricing, airport pickup, and booking confirmation. Publish answers only after the business verifies them.
8. **Final CTA:** invite visitors to discuss their transport needs via WhatsApp.
9. **Footer:** logo, service links, contact details, service area, and social links only for accounts confirmed to be official.

### Content Accuracy Rules

- The company profile describes BMR as based in Sumbawa Besar, NTB, and serving Sumbawa Besar and surrounding areas, including routes in and outside the city.
- The profile lists two contact numbers: `0823-4071-3658` and `0852-5833-9073`.
- The poster mentions a starting price of Rp350,000/day. Do not present this as a universal fleet rate. Confirm which vehicle and rental conditions it applies to before publishing.
- The poster lists Avanza, Ertiga, Innova, Fortuner, Xenia, and Hiace. Verify current availability and whether each vehicle is owned, managed, or sourced before representing it as BMR's fleet.
- The poster states 24-hour service. Confirm whether this refers to customer support, booking inquiries, or actual transport operations.
- Do not fabricate testimonials, ratings, years in business, fleet counts, client logos, certifications, or booking statistics.

---

## 6. Layout, Spacing & Responsive Behavior

### Spacing System

Use an 8px base spacing scale:

- 8px: tight internal spacing.
- 16px: standard component spacing.
- 24px: related content groups.
- 32–48px: section subgroups.
- 64–96px: major desktop section spacing, reduced on mobile.

### Grid & Container

- Maximum content width: approximately 1200–1320px.
- Desktop page gutters: 40–64px depending on viewport.
- Tablet gutters: 24–32px.
- Mobile gutters: 20–24px.
- Fleet layout: 3 columns on wide desktop where content and imagery remain readable, 2 columns on tablet, and 1–2 columns on mobile depending on card width.
- Service layout: 4 columns on wide screens, 2 columns on tablet, and a stacked layout on narrow mobile screens.
- Avoid forcing every section to `100vh`. Reserve full-height treatment for a hero only when it does not hide the main CTA or key information on mobile.

### Responsive Breakpoints

| Range | Layout guidance |
|---|---|
| Mobile: under 768px | Single-column hero, compact header, stacked CTAs where needed, readable fleet images, no horizontal overflow |
| Tablet: 768–1023px | Two-column layouts where appropriate, reduced section spacing, simplified navigation |
| Desktop: 1024–1439px | Full navigation, balanced text/image hero, multi-column services and fleet |
| Large desktop: 1440px and above | Center content within max-width; avoid stretching text lines excessively |

### Mobile-First Requirements

- Make the main WhatsApp action easy to find without overwhelming the screen.
- Avoid a very tall hero that pushes services and fleet information too far down.
- Optimize images for small screens and slow connections.
- Keep tap targets at least 44×44px where practical.
- Prevent sticky WhatsApp controls from covering form fields, footer links, or other actions.
- Ensure the navigation works by keyboard and touch.

---

## 7. Photography, Motion & Performance

### Image Treatment

- Prefer authentic, high-resolution photos of BMR's actual vehicles, interiors, drivers (with permission), and operations.
- Use destination images that genuinely represent Sumbawa when showing local travel context.
- Keep a consistent photography style: natural daylight, clean framing, realistic colors, and vehicles clearly visible.
- Use `object-fit: cover` only when cropping does not remove important vehicle details; use `contain` for isolated vehicle images when appropriate.
- Provide responsive image sizes and modern formats such as WebP or AVIF where supported.
- Set image width/height or aspect ratios to prevent layout shifts.
- Lazy-load below-the-fold images; do not lazy-load the main hero image if it is the Largest Contentful Paint element.
- Add descriptive alt text for informative images and empty alt text for purely decorative images.

### Motion

- Use subtle opacity or color transitions around 200–330ms.
- Avoid scroll-jacking, excessive parallax, continuous auto-rotation, and scale animations on every card.
- Do not auto-advance a hero carousel. If a carousel is truly needed, provide controls, accessible labels, and reduced-motion support.
- Respect `prefers-reduced-motion`.

### Performance

- Prioritize Core Web Vitals and a fast first render on mobile networks.
- Avoid heavy animation libraries unless they solve a clear need.
- Avoid autoplay background video.
- Keep JavaScript minimal for a company profile site.
- Load only the font weights actually used.
- Test on narrow mobile screens and slower connections before launch.

---

## 8. Accessibility, SEO & Trust

### Accessibility

- Maintain readable contrast, especially white text over turquoise and dark text on yellow.
- Use semantic HTML landmarks and a logical heading order.
- Ensure all menus, buttons, and forms work with keyboard input.
- Provide visible focus states and labels for icon-only controls.
- Do not communicate availability, errors, or selection through color alone.
- Use descriptive link text rather than repeated generic “Click here” links.

### SEO Basics

- Use unique page titles and meta descriptions in Indonesian.
- Use natural, location-relevant language such as “rental mobil Sumbawa Besar” and “sewa mobil di Sumbawa” where it fits the actual page content.
- Include one clear H1 per page and descriptive H2 section headings.
- Add Open Graph metadata and a suitable social sharing image.
- Add LocalBusiness structured data only with verified business name, phone, address, URL, and opening hours. Do not invent missing details.
- Compress images and use descriptive filenames/alt text.
- Create a sitemap and ensure important pages are indexable.
- Do not add fake reviews, unsupported claims, or keyword stuffing.

### Trust & Booking Clarity

- Make the service scope, contact information, and booking steps easy to find.
- State that inquiries through WhatsApp are subject to availability and confirmation.
- Explain rates and inclusions clearly once BMR has verified them.
- Do not claim that a booking, payment, or vehicle reservation is confirmed unless the business has actually confirmed it.
- Use only official social profile links and verified contact details.

---

## 9. Do's and Don'ts

### Do

- Use BMR turquoise as the primary brand color and golden yellow as a focused CTA accent.
- Let real vehicle photography carry the visual story.
- Keep the main navigation limited to the five core pages.
- Make WhatsApp inquiry the clearest conversion path.
- Use generous whitespace and simple components.
- Design mobile-first and optimize for slower connections.
- Keep vehicle specifications, pricing, service areas, and claims accurate.
- Use reusable design tokens and consistent spacing, typography, and button styles.
- Build the first version as a lightweight company profile unless a confirmed operational need requires a backend.

### Don't

- Do not retain Tesla's Electric Blue as BMR's primary accent.
- Do not use a forest-green palette that misrepresents the turquoise logo.
- Do not fill every section with turquoise or yellow.
- Do not add unnecessary gradients, glassmorphism, decorative brush strokes, or excessive shadows.
- Do not use a full-screen hero that hides the booking CTA or makes the page feel slow.
- Do not create a fake booking engine or imply real-time availability without an actual system.
- Do not publish unverified rates, vehicle availability, testimonials, opening hours, or claims.
- Do not use generic stock imagery as if it were BMR's own fleet.
- Do not overbuild a CMS, customer account system, payment flow, or database before the business needs it.

---

## 10. Agent Prompt Guide

Use this section as the implementation brief for an AI coding agent.

### Master Prompt

> Build a responsive, fast, accessible company profile website for **Bumai Rentcar (BMR)**, a rental car and transport service based in Sumbawa Besar, West Nusa Tenggara, Indonesia. Use a premium, minimal, photography-led visual direction inspired by the restraint of Tesla's website, but do not copy Tesla's brand, blue palette, vehicle-sales terminology, or exact layouts.
>
> **Brand colors:** BMR Turquoise `#168F83`, Deep Turquoise `#08665F`, Golden Yellow `#FFC928`, White `#FFFFFF`, Warm Off-White `#F7F9F7`, Primary Text `#17211F`, Secondary Text `#59635F`, Border `#E1E7E3`. Turquoise is the primary brand hue; do not reinterpret it as forest green. Use yellow sparingly for primary booking actions and important highlights. Verify text contrast and use the darker turquoise when white text needs stronger contrast.
>
> **Typography:** Use Inter or a modern system sans-serif. Keep the hierarchy clean, with strong but not oversized headlines, readable body text, and simple sentence-case navigation. Avoid decorative/script fonts for core UI.
>
> **Navigation:** Beranda, Layanan, Armada, Tentang Kami, Kontak. Include one clear “Tanya via WhatsApp” or “Hubungi Kami” CTA. On mobile, use an accessible hamburger menu and preserve an easy-to-reach contact action without covering content.
>
> **Pages:** Beranda, Layanan, Armada, Tentang Kami, Kontak. The homepage should contain a hero, service overview, featured available fleet, company advantages, booking steps, optional FAQ, a final WhatsApp CTA, and footer. Keep the site lightweight and avoid unnecessary pages in the first release.
>
> **Services based on the supplied company profile:** rental mobil dengan driver, antar-jemput bandara, trip wisata Sumbawa, and jasa angkutan barang. Vehicle models mentioned in promotional materials include Avanza, Ertiga, Innova, Fortuner, Xenia, and Hiace, but only display them as currently available fleet after the business confirms their status.
>
> **Booking:** WhatsApp is the primary conversion path. The supplied profile lists `0823-4071-3658` and `0852-5833-9073`; confirm which number should be used for the main CTA before release. Use a URL-encoded prefilled message that includes the selected service or vehicle where relevant. Do not invent a booking confirmation or availability status.
>
> **Content accuracy:** The poster mentions a starting price of Rp350,000/day and 24-hour service. Do not present the price as universal or claim all operations are available 24 hours until BMR confirms the conditions. Do not fabricate fleet counts, testimonials, ratings, business history, certifications, or customer statistics. Where details are unknown, use a clear inquiry CTA instead of invented facts.
>
> **Visual rules:** use authentic BMR photos wherever possible, spacious layouts, minimal borders, very subtle or no shadows, no gradients, no glassmorphism, no autoplay video, and no unnecessary carousel. Avoid excessive cards and icon decoration. The hero must show the value proposition and booking CTA without forcing mobile visitors to scroll far.
>
> **Technical requirements:** mobile-first responsive implementation, semantic HTML, keyboard-accessible navigation, visible focus states, proper contrast, compressed responsive images, lazy-loading below-the-fold images, no layout shift from images, metadata for each page, Open Graph tags, sitemap, and LocalBusiness structured data only from verified information. Keep JavaScript and dependencies minimal. Do not add a database or admin dashboard unless requested as a separate requirement.
>
> Before implementation, inspect the existing repository and preserve its current framework and conventions. Do not replace working architecture or install dependencies without a clear reason. Build reusable components and centralized design tokens. After implementation, test navigation, WhatsApp links, responsive behavior, accessibility basics, image loading, and all visible CTAs.

### Quick Color Reference

- Primary brand: `#168F83` — BMR Turquoise
- Dark brand: `#08665F` — Deep Turquoise
- CTA accent: `#FFC928` — Golden Yellow
- Main background: `#FFFFFF` — White
- Alternate background: `#F7F9F7` — Warm Off-White
- Soft turquoise surface: `#DDF3EE` — Pale Turquoise
- Main text: `#17211F` — Charcoal
- Secondary text: `#59635F` — Gray Green
- Border: `#E1E7E3` — Soft Border

### Suggested CTA Copy

- Primary: “Tanya via WhatsApp”
- Alternative: “Cek Ketersediaan”
- Fleet CTA: “Lihat Armada”
- Service CTA: “Konsultasikan Perjalanan”
- Final CTA: “Ceritakan Kebutuhan Perjalanan Anda”

### Implementation Checklist

- [ ] Confirm official logo file and sample final brand colors.
- [ ] Confirm primary WhatsApp number and test the prefilled message.
- [ ] Confirm address, map pin, and operational area.
- [ ] Confirm vehicle availability, specifications, and permitted photographs.
- [ ] Confirm Rp350,000/day pricing context and conditions before displaying it.
- [ ] Confirm what “24-hour service” means operationally.
- [ ] Build the five core pages and responsive navigation.
- [ ] Optimize images and test on mobile/slow connections.
- [ ] Verify SEO metadata, accessibility, and all links.
- [ ] Check that no unverified claims or placeholder information remain before launch.

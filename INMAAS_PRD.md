PRODUCT REQUIREMENTS DOCUMENT

# INMAAS Nexus WebsiteExact-Parity PRD & Implementation Plan

Antigravity build specification for Next.js, GSAP, and Tailwind CSS

Reference site

https://inmaas-nexus-web.lovable.app/

Reference snapshot

27 August 2026

Parity mode

Visual, content, route, interaction, and responsive parity

Target stack

Next.js App Router + TypeScript + GSAP + Tailwind CSS

Primary audience

Antigravity implementation agent and final QA reviewer

NON-NEGOTIABLE PARITY DIRECTIVE: Reproduce the reference website exactly as observed. Do not redesign, modernize, rewrite copy, replace imagery, invent missing pages, add ecommerce features, or silently fix current quirks. Any intentional deviation requires the owner's separate approval.

## At a glance

Area

Verified reference state

Parity requirement

Public experience

Home + 5 primary pages

Reproduce every visible section and copy block

Supporting routes

Cart, admin auth, 404, 9 product slugs

Preserve observed route behavior

Languages

English + partial Urdu RTL

Switch direction, font, copy, and layout exactly

Catalog

9 visible products; hero stat says 12+

Keep the same visible mismatch

Primary asset policy

Reference-hosted images

Download the exact bytes; no substitutes

## Document map

- Verified reference snapshot and scope boundaries

- Information architecture and route behavior

- Exact visual design system

- Page-by-page product requirements

- Catalog, localization, interactions, motion, and metadata

- Next.js implementation architecture and delivery phases

- Visual parity QA, observed quirks, asset manifest, and master Antigravity prompt

# 01  Verified Reference Snapshot

This specification is based on a live, route-by-route inspection of the supplied reference site at a 1363 × 936 desktop viewport. The analysis covered visible page structure, assets, metadata, language switching, scrolling states, search, filter chips, FAQs, cart, admin authentication shell, and the 404 route.

## Verified public surfaces

- Global header in transparent and scrolled glass states

- Home, About, Products, Quality, Distributors, Contact, Cart, Admin authentication, and Not Found pages

- Nine product slugs and their route-specific metadata

- English and Urdu language states, including right-to-left layout

- Product search, category chip states, FAQ accordion, external phone/email/WhatsApp links, newsletter shell, and social/legal placeholders

- Exact image sources, inline world-map SVG, font families, OKLCH design tokens, gradients, shadows, radii, and breakpoints

## Scope boundary

Surface

Status

Instruction

Visible public website

Fully inspected

Build to exact parity

Admin sign-in and create-account toggle

Fully inspected

Build the unauthenticated shell exactly

Authenticated admin dashboard

Not accessible without account creation/login

Do not invent dashboard UI or workflows

Checkout and populated cart

Not reachable; no add-to-cart control is exposed

Do not invent checkout or cart-item behavior

Contact/distributor submissions

Contact is placeholder; distributor uses WhatsApp

Do not add forms beyond observed UI

Provider overlay: The black 'Edit with Lovable' badge is hosting-platform chrome, not INMAAS product UI. Exclude it from the Next.js build and mask it during reference screenshot comparison. The green WhatsApp button is product UI and must be reproduced.

# 02  Product Goal, Users, and Non-Goals

## Primary goal

Deliver an independently hosted Next.js recreation that looks and behaves like the supplied reference at every verified route, while replacing the original runtime with a maintainable component architecture built with Tailwind CSS and GSAP.

## Primary user groups

- Patients and families browsing the product portfolio

- Doctors, pharmacies, hospitals, and institutional buyers checking quality claims

- Prospective distributors looking for partnership information and WhatsApp contact

- INMAAS staff accessing the admin authentication entry point

- English and Urdu readers across Pakistan and international offices

## Non-goals for the parity release

- No visual redesign, copy rewrite, rebranding, or new layout system

- No replacement product photography, stock imagery, AI images, or altered crops

- No new product-detail layout, cart items, checkout, payment, order tracking, or pricing

- No completed contact form, distributor application form, newsletter backend, legal pages, or social destinations

- No SEO repair, typo correction, claim normalization, sitemap, robots.txt, hreflang, or new schema beyond what is already observed

- No invented authenticated admin dashboard

# 03  Information Architecture and Route Contract

Route

Visible page contract

Indexing / special behavior

/

Full marketing homepage

Canonical /; Organization JSON-LD

/about

Story, values, founder, leadership, global presence

Own canonical and metadata

/products

Searchable grouped catalog

Own canonical and metadata

/products/[slug]

Visually renders the same catalog page

Unique title/description/OG; canonical points to /products

/quality

Credentials, six-step QA process, laboratory

Own canonical and metadata

/distributors

Partnership information and WhatsApp CTA

Own canonical; no OG URL observed

/contact

Centered under-construction contact card

Own canonical; default WHO-GMP OG copy

/cart

Empty-cart state only

robots=noindex; no canonical

/admin

Sign-in / create-first-admin shell

robots=noindex; no canonical

Any unknown path

INMAAS 404 page

Default site metadata

## Product slug contract

#

Slug

Visible name

Category

1

natocid-syrup

Natocid Syrup

Syrup

2

newagada-syrup

Newagada Syrup

Syrup

3

newtizer-syrup

Newtizer Syrup

Syrup

4

newtocare-cough-syrup

Newtocare Cough Syrup

Syrup

5

alfaton-d-tablet

Alfaton-D Tablet

Tablet

6

athlukat-tablet

Athlukat Tablet

Tablet

7

athpric-tablet

Athpric Tablet

Tablet

8

evemark-capsule

Evemark Softgel Capsule

Capsule

9

fenglar-iv

Fenglar Injection (IV)

IV & IM Solutions

# 04  Exact Visual Design System

## Core color tokens

Token

Exact CSS value

Primary use

--brand

oklch(48% .15 262)

Primary blue, buttons, links

--brand-deep

oklch(40% .15 262)

Footer, deep blue text

--brand-light

oklch(66% .13 245)

Blue highlights

--gold

oklch(85% .15 90)

Quality steps and yellow CTA

--gold-light

oklch(90% .13 92)

Soft yellow accents

--purple

oklch(51% .22 335)

Gradient end, innovation accents

--purple-deep

oklch(40% .2 328)

Deep purple accents

--ink

oklch(24% .03 260)

Headings and primary text

--ink-soft

oklch(52% .02 260)

Body and secondary text

--surface

oklch(98.5% .008 235)

Page background

--surface-2

oklch(96.5% .02 235)

Cards and alternate bands

--border

oklch(90% .02 235)

Quiet outlines and fields

## Gradients, glass, and shadows

- Brand gradient: linear-gradient(135deg, rgb(46, 86, 166) 0%, rgb(61, 130, 199) 100%).

- Heading text gradient: linear-gradient(135deg, rgb(46, 86, 166) 0%, rgb(177, 43, 142) 100%).

- Gold gradient: linear-gradient(135deg, rgb(245, 200, 58) 0%, rgb(255, 217, 102) 100%).

- Hero gradient: radial-gradient(circle at 20% 10%, rgb(234, 246, 255) 0%, rgb(247, 251, 253) 55%, rgb(255, 255, 255) 100%).

- Innovation gradient: linear-gradient(135deg, rgb(122, 46, 142) 0%, rgb(194, 54, 146) 100%).

- Glass: white at 70% opacity, 18px blur, 140% saturation, 1px white/60 border.

- Soft shadow: 0 10px 30px -12px oklch(45% .15 260 / .18).

- Elevated shadow: 0 20px 55px -20px oklch(35% .15 260 / .35).

- Glow shadow: 0 0 0 1px oklch(55% .16 260 / .12), 0 20px 45px -15px oklch(55% .16 260 / .35).

## Typography

Role

Typeface and weights

Observed use

Display

Poppins 500, 600, 700, 800

H1-H4 and prominent labels

Body

Inter 400, 500, 600, 700

Paragraphs, navigation, buttons, forms

Numeric

Montserrat 600, 700, 800

Stats and numeric labels

Urdu

Noto Nastaliq Urdu 400, 600, 700

RTL body content and navigation; glyph fallback may apply to headings

Desktop hero H1 is 72px with 1.05 line height. Section H2 is generally 48px. Responsive classes reduce display sizes to 48px/60px at smaller breakpoints. Body copy is normally 16px or 18px with relaxed line height.

## Geometry and spacing

- Maximum content width: 1280px (max-w-7xl).

- Desktop horizontal container padding: 32px; tablet 24px; mobile 16px.

- Fixed header height: 72px; content begins after an approximately 80px offset.

- Primary section rhythm: 96px top and bottom on desktop; 64-80px for compact bands.

- Base radius: 16px; rounded-2xl: 24px; rounded-3xl: 28px; hero image/large CTA panels: 32-40px.

- Hero minimum height: 92vh. Hero grid uses two equal columns at 1024px and above with a 48px gap.

- Card hover state: translateY(-4px) over 300ms and switch from soft to elevated shadow.

## Responsive breakpoints

Breakpoint

Exact threshold

Required behavior

Base

< 640px

Single-column sections; 16px gutters; stacked CTA; two-column stat grid

sm

≥ 640px

Two/three/four-column utility grids where declared; larger headings and padding

md

≥ 768px

Show language switch and Contact Us button; two-column secondary grids

lg

≥ 1024px

Show full nav; hide hamburger; two-column hero; 3-5 column content grids

## Global components

### Header

Fixed, transparent at page top. After scrolling, add the glass class, soft shadow, and border. Active link uses a pale blue pill. Logo is a small mark. Desktop nav order: Home, About, Products, Quality, Distributors, Contact. Right group: cart icon, language switch, Contact Us. Under 1024px, hide nav and show menu icon; under 768px, hide language and Contact Us desktop buttons.

### Primary button

Full pill; 14px/600 Inter; 24px horizontal and 14px vertical padding; brand gradient; white text; glow shadow; arrow icon.

### Secondary button

Full pill; white/70 fill; subtle brand border; brand-deep text; optional backdrop blur.

### Soft card

White, 1px pale blue border, 24-28px radius, soft shadow, 300ms hover lift.

### Footer

Deep brand blue, four desktop columns, 96px top margin, muted white text, social circles, exact two office blocks, newsletter shell, bottom legal row.

### WhatsApp

Fixed 56px circle at bottom/right 24px; green-to-teal gradient; z-index 40; white icon; 110% hover scale.

# 05  Homepage Product Requirements

# Route: /  |  Title: INMAAS Health Care — DRAP Approved Pharmaceuticals

## 1. Hero

- Two-column layout inside the radial hero background. Left column contains the DRAP pill, display headline, body copy, two CTAs, and four stats. Right column contains the exact molecular DNA image with rounded corners and two floating glass badges.

- Kicker: DRAP APPROVED PHARMACEUTICALS

- H1: Science-driven medicine for healthier lives. Apply the blue-to-purple text gradient only to 'healthier lives'.

- Body: INMAAS Health Care manufactures premium syrups, tablets, capsules, and IV solutions — every product approved by DRAP to ensure the highest quality standards.

- CTA 1: Explore Products → /products. CTA 2: Become a Distributor → /distributors.

- Stats: 12+ Products; 80+ Cities Covered; 3+ Years of Care; DRAP / DRAP Approved.

- Floating badges: R&D Innovation / Backed by science; DRAP Approved / Products approved by DRAP.

- Hero image: hero-pharma-DkfQWNl0.jpg, natural size 1920 × 1280, object-cover.

## 2. About preview

- Two-column section. Left: eyebrow, H2, paragraph, Read Our Story link. Right: two staggered soft cards.

- Eyebrow: ABOUT INMAAS. H2: A new standard of pharmaceutical excellence.

- Paragraph: INMAAS Health Care is committed to delivering safe, effective, and affordable medicines. We combine modern manufacturing, rigorous quality assurance, and scientifically formulated ingredients to serve healthcare professionals and patients nationwide.

- Mission card: To improve lives by providing high-quality, science-backed pharmaceutical products at accessible prices.

- Vision card: To be a trusted name in healthcare — recognized for innovation, integrity, and patient-first values.

## 3. Product categories

- Centered H2 and subtitle followed by a four-card grid. Each card uses a square photo, a white title row, and hover zoom/lift.

- H2: Product Categories. Subtitle: A full portfolio built for every stage of care.

- Cards and hrefs: Syrups → /products?cat=syrup; Tablets → ?cat=tablet; Capsules → ?cat=capsule; IV & IM Solutions → ?cat=iv.

- Use the exact four category images from the asset manifest.

## 4. Featured products

- Blue-tinted vertical gradient section. Header is left aligned with View All Products on the right. Products render in a horizontally scrollable, non-wrapping rail with 320px cards and 24px gaps.

- H2: Featured Products. Subtitle: Formulations trusted by physicians and pharmacies.

- Card order: Newagada, Natocid, Newtocare, Newtizer, Athlukat, Alfaton-D, Athpric, Evemark, Fenglar.

- Each card has square image, category chip, product name, short description, and Learn More link.

## 5. Why Choose INMAAS

- Centered H2, subtitle, and six soft icon cards in a 3-column desktop grid.

- Cards: DRAP Approved; Modern Manufacturing; Quality Assurance; Trusted Ingredients; Scientific Formulations; Nationwide Distribution.

- Descriptions must match the live reference copy exactly.

## 6. From molecule to medicine

- Full-width deep-blue to purple quality band with white H2 and subtitle. A horizontal line connects five yellow numbered badges to dark translucent labels.

- Steps: 01 Raw Material Inspection; 02 In-Process Testing; 03 DRAP-Compliant Manufacturing; 04 Packaging Verification; 05 Nationwide Distribution.

- On narrow screens convert the line into a vertical or horizontally scrollable sequence without changing copy, colors, or numbering.

## 7. Grow with INMAAS

- Large rounded pale-gradient CTA panel. Left: H2 and paragraph. Right: blue pill button.

- Copy: Join a distribution family that spans hospitals, pharmacies, and clinics across Pakistan. Enjoy transparent margins, dedicated support, and a fast-moving product portfolio.

## 8. Testimonials

- Centered H2/subtitle and three equal white cards. Each has quote, circular initials badge, person name, and role.

- Dr. Ahmed Raza / General Physician; Sana Malik / Pharmacy Owner; Dr. Fatima Khan / Pediatrician.

- Keep all three English quotes verbatim, including quotation marks and em dashes.

## 9. FAQ

- Centered H2/subtitle with a single-open accordion. First item is open by default. White rounded rows use quiet borders and shadows.

- Questions: Are INMAAS products approved by DRAP?; Where are INMAAS medicines available?; How can I become an INMAAS distributor?; How can healthcare professionals order in bulk?

- Use the live answers exactly. Chevron rotates when expanded.

## 10. Contact CTA

- Large rounded blue-to-purple panel, centered white copy, and yellow pill CTA.

- H2: Get in touch with INMAAS. Body: Questions about a product, a partnership, or an order? Our team is ready to help. Button: Contact Us → /contact.

# 06  Secondary Page Requirements

## About: /about

- Hero: centered gradient field, eyebrow 'About INMAAS', H1 'About INMAAS Health Care' with gradient applied to 'INMAAS Health Care', supporting line, and Explore Our Products CTA.

- Our Story: two-column layout with lab-BAM7zq50.jpg on the left and five exact story paragraphs on the right. H2: A vision born from purpose.

- Vision & Mission: surface-2 band with H2 'Purpose that guides every decision' and two large cards.

- Core Values: six-card grid. Quality First, Integrity, Innovation, Affordability, Customer Well-being, Scientific Excellence.

- Global Presence: surface-2 band. H2 'Canadian Vision. Pakistani Manufacturing.'; two country labels; exact inline 500 × 400 SVG map and animated dotted arc.

- Founder message: centered quote card with Imtiaz Shaikh, Founder & CEO.

- Leadership: five profile cards using the exact portraits. Imtiaz Shaikh, Javed Ali Veesar, Syed Sagar Ali Shah, Ghulam Nabi, Syed Musawer Ali Shah.

- Why INMAAS: six-card grid. International Quality Standards, Modern Manufacturing, Scientific Research, Affordable Healthcare, Customer-Centric Approach, Trusted Pharmaceutical Expertise.

- Closing CTA: deep brand panel, H2 'Together Towards Better Health', product and contact buttons.

### Exact story copy

INMAAS Health Care was founded with a simple yet powerful vision — to make high-quality pharmaceutical and nutraceutical products accessible to everyone without compromising on quality, safety, or affordability.

The inspiration behind INMAAS comes from our Founder and Chief Executive Officer, Mr. Imtiaz Shaikh, who was born and raised in Mehar, Sindh, Pakistan. Witnessing the healthcare challenges faced by ordinary people inspired him to pursue a mission of creating products that genuinely improve lives.

After moving to Canada, Mr. Shaikh gained valuable international experience and strengthened his commitment to serving humanity through healthcare. His vision became clear: premium-quality supplements and healthcare products should not be limited to a privileged few but should be available to everyone at fair and affordable prices.

Driven by this purpose, INMAAS Health Care was established as a Canadian-Pakistani pharmaceutical and nutraceutical company dedicated to manufacturing scientifically formulated products using carefully selected ingredients, modern production standards, and rigorous quality control.

Every product is developed with one objective — to provide maximum health benefits while maintaining high quality and minimizing unnecessary side effects. Today, INMAAS Health Care continues to grow with the same mission that inspired its foundation: delivering trusted healthcare solutions that improve lives and promote healthier communities.

## Products: /products and /products/[slug]

- Hero: eyebrow Products; H1 Our complete product portfolio; supporting paragraph exactly as observed.

- Sticky-style filter row under the hero: search field on the left, five small category pills on the right.

- Default layout groups products under Syrups (4), Tablets (3), Capsules (1), and IV & IM Solutionss (1). Preserve the double 's' typo in the last heading.

- Search is functional. It searches product data and, while active, hides category group headings, shows a result-count line, and renders matching cards in a flat responsive grid.

- No-result copy: Showing 0 results for "[query]" and No products match your search.

- Category buttons currently change only their selected visual state; they do not filter the product list. Home category query parameters are ignored and All remains selected on direct load. Preserve this behavior for the parity release.

- Product slug routes change metadata and URL but visibly render the same product catalog. Implement generateMetadata per slug, then reuse the catalog page component.

## Quality: /quality

- Centered gradient hero. H1: Uncompromising quality from molecule to medicine.

- Credential strip with four cards: DRAP Approved; ISO 9001; DRAP Approved; Halal Certified. Preserve the duplicated DRAP label and exact supporting text.

- QA process: H2 Six checkpoints, zero shortcuts. Render six alternating or stacked process blocks with STEP 01-06 labels and the verified descriptions.

- Steps: Raw Material Inspection; In-Process Testing; Analytical Testing; Batch Release; Documentation & Traceability; Post-Distribution Surveillance.

- Laboratory band: exact lab image, eyebrow In-House Laboratory, H2 A lab equipped for the tests that matter, body copy, and six-item equipment list.

- COA CTA: H2 Need a Certificate of Analysis?; body copy; Request COA → /contact.

## Distributors: /distributors

- Hero: eyebrow Partner with INMAAS, H1 Build a profitable healthcare partnership, supporting paragraph, WhatsApp emphasis copy, and WhatsApp button.

- Why partner: four cards - Competitive Margins, DRAP-Approved Quality, Reliable Supply, Dedicated Support.

- Coverage Areas: Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Islamabad Capital Territory, Gilgit-Baltistan, Azad Jammu & Kashmir.

- Partnership Requirements: valid drug sale license; compliant storage; experienced sales/delivery team; established healthcare network.

- Closing CTA uses the exact WhatsApp deep link and phone number +92 333 7578422. Include Karachi and Milton office cards and the email link.

- Do not add a distributor application form. The current page uses WhatsApp and phone only.

## Contact: /contact

- Single centered white card on the pale background with a blue construction icon.

- H1: Contact INMAAS. Supporting text: Reach us by form, phone, email, WhatsApp, or visit our office.

- Status text: This page is being crafted as part of the ongoing INMAAS build.

- Button: Back to Home → /. Do not add a contact form, map, office grid, or new content in the parity release.

## Cart: /cart

- Centered empty-state icon, H1 Your cart is empty, supporting text Browse our catalog to add products, and Shop Products → /products.

- No product card exposes Add to Cart. Do not invent populated-cart, quantity, checkout, price, or payment UI.

## Admin authentication: /admin

- Centered blue shield icon, H1 Admin Sign in, subtitle Restricted area for INMAAS staff.

- White card with EMAIL and PASSWORD fields, Sign in button, and Need to create the first admin account? toggle.

- Create mode changes H1 to Create admin account, primary button to Create account, and toggle to Have an account? Sign in.

- Back link: ← Back to site. Keep the global header, footer, WhatsApp button, and the same page spacing.

- Do not invent the authenticated dashboard. Use an AuthAdapter interface so Supabase or another provider can be connected later without changing this shell.

## Not Found

- Global site chrome remains visible.

- Centered H1 404, H2 Page not found, text The page you're looking for doesn't exist or has been moved, and Go home → /.

# 07  Exact Product Catalog and Data Model

Store catalog content in one typed data module and derive homepage cards, products page groups, search results, metadata, and image sources from it. Do not duplicate product copy across components.

export type ProductCategory = 'syrup' | 'tablet' | 'capsule' | 'iv';

export interface Product {

  slug: string;

  name: string;

  category: ProductCategory;

  categoryLabel: string;

  shortDescription: string;

  metaDescription: string;

  image: string;

  searchTerms?: string[];

}

## Verified product entries

### 1. Natocid Syrup

Slug: /products/natocid-syrup

Category: Syrup

Visible description: Antacid — fast relief from acidity and indigestion

Meta description: A smoothly-neutralising antacid suspension providing rapid, long-lasting relief from hyperacidity, heartburn, and indigestion.

Exact image: Open source image

### 2. Newagada Syrup

Slug: /products/newagada-syrup

Category: Syrup

Visible description: Multivitamins & Minerals — daily energy and immunity

Meta description: A comprehensive multivitamin and mineral food supplement syrup formulated to support daily energy, immunity, and overall wellness for children and adults.

Exact image: Open source image

### 3. Newtizer Syrup

Slug: /products/newtizer-syrup

Category: Syrup

Visible description: Appetizer — for a healthy appetite and digestion

Meta description: A herbal appetite stimulant syrup that supports healthy appetite, digestion, and general well-being — ideal for children with poor appetite.

Exact image: Open source image

### 4. Newtocare Cough Syrup

Slug: /products/newtocare-cough-syrup

Category: Syrup

Visible description: Ivy Leaf Extract — dual action for dry & productive cough

Meta description: A herbal cough syrup with standardised Ivy Leaf Extract that relieves both dry and productive cough by loosening mucus and soothing the airways.

Exact image: Open source image

### 5. Alfaton-D Tablet

Slug: /products/alfaton-d-tablet

Category: Tablet

Visible description: Vitamin D3 100,000 IU — builds strong bones and teeth

Meta description: A high-strength Vitamin D3 chewable tablet formulated to correct deficiency and support bone strength, immune health, and calcium absorption.

Exact image: Open source image

### 6. Athlukat Tablet

Slug: /products/athlukat-tablet

Category: Tablet

Visible description: Montelukast — manages asthma and allergy symptoms

Meta description: A selective leukotriene receptor antagonist for the prophylaxis and chronic treatment of asthma and relief of seasonal allergic rhinitis.

Exact image: Open source image

### 7. Athpric Tablet

Slug: /products/athpric-tablet

Category: Tablet

Visible description: Ciprofloxacin 250/500 mg — effective for bacterial infections

Meta description: A broad-spectrum fluoroquinolone antibiotic effective against a wide range of Gram-positive and Gram-negative bacterial infections.

Exact image: Open source image

### 8. Evemark Softgel Capsule

Slug: /products/evemark-capsule

Category: Capsule

Visible description: Evening Primrose Oil — skin health & hormone balance

Meta description: A premium Evening Primrose Oil softgel rich in Gamma-Linolenic Acid (GLA) that supports healthy skin, hormonal balance, and relief from PMS discomfort.

Exact image: Open source image

### 9. Fenglar Injection (IV)

Slug: /products/fenglar-iv

Category: IV & IM Solutions

Visible description: Ceftriaxone 250/500 mg — strong broad-spectrum defence

Meta description: A third-generation cephalosporin lyophilised powder for intravenous use, providing potent broad-spectrum antibacterial coverage and rapid clinical recovery.

Exact image: Open source image

# 08  Interaction and State Requirements

Interaction

Exact parity behavior

Header scroll

At top: transparent. After scroll: glass + soft shadow. Transition 300ms.

Active nav

Pale blue pill and brand text based on current pathname; product slugs keep Products active.

Language

Toggle English/Urdu; set html lang and dir; mirror layout; persist during client navigation if possible.

Product search

Case-insensitive search across all product fields. Active state removes group headings and displays result count.

Category chips

Only selected style changes. Do not filter in parity release. URL query is not updated.

FAQ

First item open by default; clicking changes expanded item; height animates; chevron rotates.

Featured rail

Native horizontal overflow with visible scrollbar behavior; cards never wrap.

Newsletter

Email input + Subscribe shell only. Do not invent backend. Preserve current visual validation.

WhatsApp

External wa.me link opens with exact phone/text. Floating button stays visible.

Cart

Always renders empty-state because no add control is exposed.

Admin

Mode toggle changes copy locally. Network auth implementation remains behind adapter/config.

## Exact external destinations

Primary WhatsApp: https://wa.me/923337578422?text=Hello%20INMAAS

Distributor WhatsApp: https://wa.me/923337578422?text=Hi%20INMAAS%20team%2C%20I%20am%20interested%20in%20becoming%20a%20distributor.%20Please%20share%20the%20next%20steps.

Pakistan phone: tel:+923337578422

Canada phone: tel:+16476222997

Email: mailto:inmaaspk@gmail.com

# 09  English / Urdu Localization Contract

The Urdu state is intentionally partial. Match the reference as observed instead of completing or improving translation. The body switches to Noto Nastaliq Urdu and the entire page becomes RTL, but several badges, product descriptions, testimonial quotes, FAQs, addresses, and product names remain English.

English navigation

Urdu navigation

Home

ہوم

About

ہمارے بارے میں

Products

مصنوعات

Quality

معیار

Distributors

ڈسٹری بیوٹر

Contact

رابطہ

Contact Us

رابطہ کریں

## Verified Urdu homepage headings

English

Observed Urdu

Science-driven medicine for healthier lives

صحت مند زندگی کے لیے سائنسی ادویات

A new standard of pharmaceutical excellence

دواسازی میں ایک نیا معیار

Product Categories

مصنوعات کے زمرے

Featured Products

منتخب مصنوعات

Why Choose INMAAS

انماس کیوں؟

From molecule to medicine

مالیکیول سے دوا تک

Grow with INMAAS

انماس کے ساتھ ترقی کریں

Trusted by Healthcare Professionals

پیشہ ور صحت کارکنوں کا اعتماد

Frequently Asked Questions

عمومی سوالات

Get in touch with INMAAS

انماس سے رابطہ کریں

- Set <html lang='ur' dir='rtl'> in Urdu mode and <html lang='en' dir='ltr'> in English mode.

- Mirror hero columns: Urdu text on the right and hero image on the left.

- Use logical Tailwind properties (start/end, ps/pe, text-start) wherever possible.

- Keep product names, product descriptions, testimonial quotes, FAQ questions/answers, office details, and floating badge copy in English where the current reference does.

- The document title and metadata remain English when switching the client-side language.

# 10  GSAP Motion Specification

The reference currently uses inline opacity/transform motion states. Recreate the same visual outcomes with GSAP and ScrollTrigger. Motion must support prefers-reduced-motion and must never leave content invisible when JavaScript is delayed or disabled.

Element

Trigger and from state

Target and timing

Hero text group

Page load; opacity 0, y 20

opacity 1, y 0; 0.9-1.1s; power3.out

Hero image group

Page load; opacity 0, scale .94

opacity 1, scale 1; ~1.0s; power3.out

Hero stats

After hero; opacity 0, y 20

Stagger 0.10-0.12s; each ~0.55s

Floating badges

After hero; y ±20, opacity 0

Reveal after image; then subtle 8s float loop

Generic reveal

ScrollTrigger start top 85%; opacity 0, y 24

opacity 1, y 0; 0.65s; once

Card grids

ScrollTrigger; cards opacity 0, y 30

Stagger 0.08-0.12s; 0.55s; once

Category image hover

Pointer hover

scale 1.10 over 0.5s

Card hover

Pointer hover

y -4 and elevated shadow over 0.3s

Quality process

Section entry

Draw connector line then stagger numbered steps

World map

Section entry

Arc draw; gold dot travels repeatedly along path

FAQ

Click

Animate height/opacity; rotate chevron 180°

// Use only inside client components.

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {

    gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {

      autoAlpha: 1,

      y: 0,

      duration: 0.65,

      ease: 'power3.out',

      scrollTrigger: { trigger: el, start: 'top 85%', once: true },

    });

  });

}, { scope: container });

- Do not use motion to change layout dimensions before hydration.

- Kill ScrollTriggers on component cleanup and route changes.

- If reduced motion is enabled, set all content to final visible state and disable looping float/dot effects.

- Animations must not block keyboard navigation or delay interactive controls.

# 11  Metadata and Technical SEO Parity

Route

# Title

Description / key parity note

/

INMAAS Health Care — DRAP Approved Pharmaceuticals

Premium syrups, tablets, capsules and IV solutions by INMAAS Health Care — approved by DRAP to ensure the highest quality standards.

/about

About INMAAS Health Care — Our Story, Mission & Vision

Canadian-Pakistani company story description; own canonical.

/products

Products — INMAAS Health Care

Browse syrups, tablets, capsules, and IV solutions; own canonical.

/quality

Quality Assurance — INMAAS Health Care

DRAP and ISO standards; own canonical.

/distributors

Distributor Network — INMAAS Health Care

WhatsApp distributor copy; own canonical; no OG URL.

/contact

Contact — INMAAS Health Care

Short contact description; default WHO-GMP OG title/description.

/cart

Your Cart — INMAAS Health Care

robots noindex; no canonical.

/admin

Sign in — INMAAS Health Care

robots noindex; no canonical.

- Use one minimal Organization JSON-LD object on the homepage: name INMAAS Health Care and the observed DRAP-approved pharmaceutical description.

- Use the reference OG image: https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f198b6-6382-4350-90a7-00308a05d0f2/id-preview-49c9284c--75be3a20-8eae-4c20-ad69-8b84979489e7.lovable.app-1783675204503.png

- Product slugs use unique title, description, OG title/description/image, but canonical remains /products.

- No hreflang tags are present. Do not add them in the parity release.

- Both /robots.txt and /sitemap.xml currently fall through to the HTML 404 experience. Do not add route files if absolute parity is required.

- Preserve the default WHO-GMP OG wording on routes where it appears even though the visible site focuses on DRAP approval.

# 12  Next.js Technical Architecture

## Required stack

- Current stable Next.js with App Router and TypeScript

- React Server Components by default; client components only for header state, language, search, FAQ, admin mode, and GSAP

- Tailwind CSS with the exact CSS variables and custom utility classes from this specification

- GSAP, @gsap/react, and ScrollTrigger

- next/font/google: Poppins, Inter, Montserrat, Noto Nastaliq Urdu

- lucide-react for the same outline icon style

- next/image for local exact assets; object-fit and crops must match the reference

- No component kit that changes default radii, shadows, typography, spacing, or focus appearance

## Recommended source structure

app/

  layout.tsx

  globals.css

  page.tsx

  about/page.tsx

  products/page.tsx

  products/[slug]/page.tsx

  quality/page.tsx

  distributors/page.tsx

  contact/page.tsx

  cart/page.tsx

  admin/page.tsx

  not-found.tsx

components/

  layout/Header.tsx

  layout/Footer.tsx

  layout/WhatsAppButton.tsx

  home/*

  about/*

  products/ProductCard.tsx

  products/ProductCatalog.tsx

  quality/*

  distributors/*

  ui/Reveal.tsx

  ui/SectionHeading.tsx

  ui/SoftCard.tsx

  ui/FaqAccordion.tsx

context/LanguageProvider.tsx

data/products.ts

data/content.en.ts

data/content.ur.ts

lib/metadata.ts

lib/auth-adapter.ts

public/assets/*

## Rendering and state strategy

- Render all static copy and product lists on the server for fast first paint and reliable metadata.

- Language state may initialize from localStorage after hydration, but English must be the stable server default to avoid mismatch. Apply lang/dir changes atomically.

- Product search is local client state. Product data remains static and typed.

- Product slug pages call generateStaticParams and generateMetadata, then render the shared ProductCatalog page to preserve observed behavior.

- Header scroll state uses a passive listener or ScrollTrigger and toggles the glass/soft-shadow class after a small scroll threshold.

- Admin uses an AuthAdapter interface. Do not embed Supabase keys or create an account during initial visual-parity work.

- All external destinations are constants; do not scatter phone numbers or URLs through components.

## Image acquisition protocol

- Download every source listed in the asset manifest once and store it under public/assets using a stable human-readable filename.

- Do not screenshot images from the website, recompress them, upscale them, remove backgrounds, recolor them, or substitute a visually similar image.

- Record SHA-256 hashes in the repository after download so future optimizers cannot silently change the source bytes.

- If Next.js optimization changes visible sharpness or crop, set quality=100 or use unoptimized for that asset while keeping correct dimensions and lazy-loading behavior.

# 13  Antigravity Implementation Plan

## Phase 0 - Reference lock

Create reference screenshots and the parity checklist. Freeze copy, asset URLs, routes, breakpoints, and observed quirks before coding.

## Phase 1 - Scaffold

Create the Next.js TypeScript App Router project, Tailwind setup, linting, fonts, icon library, GSAP integration, and root metadata.

## Phase 2 - Assets and data

Download exact assets, add the product data module, localization dictionaries, office/contact constants, and metadata map.

## Phase 3 - Global design system

Implement globals.css tokens, gradients, shadows, radii, buttons, soft cards, section heading, fixed header, footer, and WhatsApp button.

## Phase 4 - Homepage

Build all ten homepage sections in verified order. First complete static parity, then add GSAP entry, reveal, timeline, hover, and accordion motion.

## Phase 5 - Core pages

Build About, Quality, and Distributors using shared primitives and exact page-level content/assets.

## Phase 6 - Catalog and route parity

Build Products search/grouping/no-result state, inert category chips, product metadata routes, Contact placeholder, Cart empty state, Admin auth shell, and Not Found.

## Phase 7 - Urdu and RTL

Implement the language provider, verified Urdu copy, partial English remnants, RTL mirroring, and Noto Nastaliq Urdu loading.

## Phase 8 - Metadata parity

Implement route titles, descriptions, OG data, canonical behavior, noindex pages, homepage Organization schema, and product metadata.

## Phase 9 - Responsive QA

Check 390, 640, 768, 1024, 1280, and 1363 widths. Fix wrapping, stacking, overflow, hero crop, card sizes, and mobile navigation.

## Phase 10 - Visual regression and handoff

Run route-by-route screenshots against the reference, document intentional provider-overlay exclusion, verify links and interactions, then prepare deployment.

## Build order rule

Do not animate early: Complete pixel-accurate static layout and responsive behavior before adding GSAP. Motion must be the final layer over correct geometry, not a workaround for layout differences.

# 14  QA and Acceptance Criteria

## Visual parity gate

- At 1363 × 936, every major anchor point is within 4px of the reference after excluding browser chrome and the Lovable provider badge.

- Fonts, font weights, line heights, gradients, border radii, shadows, card widths, section spacing, and hero crop match the reference.

- Exact product, category, leadership, hero, and laboratory images are used with no substitutions.

- Header is transparent at top and switches to glass + soft shadow after scrolling.

- Horizontal featured-product rail, quality timeline, CTA panels, footer, and fixed WhatsApp button match placement and behavior.

- No console errors, hydration warnings, missing images, cumulative layout shifts, or animation states that leave content invisible.

## Route and behavior gate

Surface

Acceptance check

/

All ten sections, first FAQ open, exact outbound links

/about

Five leaders, inline SVG map, founder quote, two CTAs

/products

Nine items; 4/3/1/1 groups; search and no-result states

/products/[slug]

Catalog visual; unique metadata; canonical /products

/quality

Four credentials; six process steps; lab list; COA CTA

/distributors

WhatsApp-first experience; seven regions; four requirements

/contact

Under-construction card only

/cart

Empty state only; noindex

/admin

Sign-in/create toggle; noindex; no invented dashboard

404

Global chrome + verified 404 copy

## Responsive and accessibility gate

- Desktop nav appears at 1024px and above; hamburger appears below 1024px. Desktop language/Contact Us controls appear at 768px and above.

- All layouts remain usable at 390px without horizontal page overflow. The featured-product rail remains intentionally horizontally scrollable.

- All images retain meaningful alt text from the reference. Inline map uses role=img and the exact aria-label.

- Navigation, FAQ, menu, language toggle, search, and admin-mode toggle are keyboard operable with visible focus indicators.

- Reduced-motion users receive fully visible content with non-essential loops disabled.

- Urdu mode uses RTL and logical alignment without reversing product image content or numeric strings incorrectly.

# 15  Observed Current Quirks to Preserve

Parity rule: These are observed characteristics of the reference, not recommendations. Preserve them in the first exact-parity release. Fixes may be scoped only after the clone has been approved against the reference.

Observed quirk

Exact current behavior

Catalog count mismatch

Homepage says 12+ Products; catalog exposes 9 products.

Category deep links

Home links use ?cat= values, but Products loads All and ignores the query.

Category chips

Selected styling changes, but product groups are not filtered.

Product detail routes

Slug URLs and metadata change, but the visible page remains the catalog.

Product canonicals

Every product slug canonical points to /products.

Typo

Catalog heading reads IV & IM Solutionss.

Contact

The page openly states it is still being crafted.

Cart

No Add to Cart control is visible; cart stays empty.

Urdu

Translation is partial; many content blocks remain English.

Quality credentials

DRAP Approved appears twice in the four-card credential row.

Footer links

Social, Privacy Policy, and Terms of Use point to #.

Newsletter

Visible shell has no confirmed backend behavior.

robots / sitemap

Standard endpoints resolve to the website 404 HTML.

OG claim mismatch

Some default social metadata says WHO-GMP while visible copy focuses on DRAP.

First-admin option

A public unauthenticated toggle offers first admin account creation.

# 16  Exact Asset Manifest

The source URLs below were read from the live page. Antigravity must download these exact files into public/assets before final QA. Do not leave the application dependent on Lovable's __l5e URLs for production.

Asset

Exact use

Source

inmaas-logo-mark.png

Header + footer logo

Open exact source

hero-pharma.jpg

Homepage hero molecular DNA image

Open exact source

lab.jpg

About story + Quality laboratory

Open exact source

cat-syrup.jpg

Homepage Syrups category

Open exact source

cat-tablet.jpg

Homepage Tablets category

Open exact source

cat-capsule.jpg

Homepage Capsules category

Open exact source

cat-iv.jpg

Homepage IV & IM category

Open exact source

natocid-v2.jpg

Natocid product card

Open exact source

newagada-v2.jpg

Newagada product card

Open exact source

newtizer-v2.jpg

Newtizer product card

Open exact source

newtocare-v2.jpg

Newtocare product card

Open exact source

alfaton-d-v2.jpg

Alfaton-D product card

Open exact source

athlukat-v2.jpg

Athlukat product card

Open exact source

athpric-v2.jpg

Athpric product card

Open exact source

evemark-v2.jpg

Evemark product card

Open exact source

fenglar-v2.jpg

Fenglar product card

Open exact source

imtiaz-shaikh.jpg

Leadership: Founder & CEO

Open exact source

javed-ali-veesar-v2.jpg

Leadership: Regional Sales Manager

Open exact source

sagar-ali-shah-v2.jpg

Leadership: Accounts & Admin Officer

Open exact source

ghulam-nabi-v2.jpg

Leadership: Area Sales Manager

Open exact source

musawer-ali-shah.jpg

Leadership: E-commerce Growth Manager

Open exact source

## Exact inline global-presence SVG

<svg viewBox="0 0 500 400" className="h-full w-full" role="img"

  aria-label="Map showing Canada and Pakistan connected">

  <defs>

    <linearGradient id="mapArc" x1="0" y1="0" x2="1" y2="0">

      <stop offset="0%" stopColor="#2E56A6" />

      <stop offset="100%" stopColor="#B12B8E" />

    </linearGradient>

    <radialGradient id="dotGlow">

      <stop offset="0%" stopColor="#F5C83A" stopOpacity="0.9" />

      <stop offset="100%" stopColor="#F5C83A" stopOpacity="0" />

    </radialGradient>

  </defs>

  <g fill="#EAF6FF" stroke="#C7D9EC" strokeWidth="1.5">

    <path d="M40,110 Q90,70 160,90 L200,120 L180,170 L120,190 L60,170 Z" />

    <path d="M210,140 Q260,110 320,130 L360,170 L330,220 L250,225 L210,190 Z" />

    <path d="M360,150 Q420,130 470,170 L460,230 L400,240 L360,210 Z" />

    <path d="M150,240 Q200,220 260,250 L250,310 L180,320 L140,290 Z" />

  </g>

  <circle cx="120" cy="130" r="30" fill="url(#dotGlow)" />

  <circle cx="120" cy="130" r="7" fill="#2E56A6" />

  <text x="120" y="105" textAnchor="middle" fill="#1D2638" fontSize="13" fontWeight="700">Canada</text>

  <circle cx="380" cy="195" r="30" fill="url(#dotGlow)" />

  <circle cx="380" cy="195" r="7" fill="#B12B8E" />

  <text x="380" y="240" textAnchor="middle" fill="#1D2638" fontSize="13" fontWeight="700">Pakistan</text>

  <path d="M120,130 Q250,20 380,195" fill="none" stroke="url(#mapArc)"

    strokeWidth="2.5" pathLength="1" />

  <circle data-map-dot r="5" fill="#F5C83A" />

</svg>

Animate the arc from pathLength 0 to 1, then move the gold dot along the exact path M 120 130 Q 250 20 380 195. Disable both effects under reduced motion.

# 17  Ready-to-Paste Antigravity Master Prompt

How to use: Paste the complete prompt below into Antigravity together with this document. Treat this PRD as the source of truth for copy, routes, assets, quirks, and acceptance criteria.

Build an exact visual and behavioral clone of this reference website:

https://inmaas-nexus-web.lovable.app/

TECH STACK

- Current stable Next.js with App Router and TypeScript

- Tailwind CSS

- GSAP + @gsap/react + ScrollTrigger

- next/font/google for Poppins, Inter, Montserrat, and Noto Nastaliq Urdu

- lucide-react icons

PRIMARY DIRECTIVE

Reproduce the supplied reference exactly. Do not redesign it. Do not improve the UX. Do not rewrite any copy. Do not replace or regenerate any picture. Do not create a new color palette, font scale, component style, route, section, product-detail design, contact form, cart flow, checkout, dashboard, or SEO enhancement. Use the attached PRD as the source of truth. If something in the current site appears incomplete or incorrect, preserve it in the first parity build.

ONLY INTENTIONAL EXCLUSION

Do not reproduce the black "Edit with Lovable" provider badge. It is hosting-platform chrome, not INMAAS UI. Reproduce the green floating WhatsApp button.

REQUIRED ROUTES

/, /about, /products, /products/[slug], /quality, /distributors, /contact, /cart, /admin, and a global not-found route.

CURRENT QUIRKS THAT MUST REMAIN

- Homepage says 12+ products while the catalog displays 9.

- Home category links include ?cat= values, but Products ignores the query and loads All.

- Category chips change selected styling but do not filter.

- Product slug URLs render the same Products catalog visually; only URL and metadata change.

- Every product slug canonical points to /products.

- The Products heading says "IV & IM Solutionss" with a double s.

- Contact is an under-construction card, not a full contact form.

- Cart is always an empty state because no Add to Cart control exists.

- Urdu translation is partial and leaves many blocks in English.

- The Quality credential strip contains DRAP Approved twice.

- Social, Privacy Policy, and Terms of Use links use #.

- /robots.txt and /sitemap.xml currently resolve to the site 404.

- Do not invent an authenticated admin dashboard.

VISUAL SYSTEM

Implement the exact OKLCH variables, gradients, shadows, radii, max width, breakpoints, header states, card styles, button styles, typography, spacing, and responsive rules listed in the PRD. The desktop content max width is 1280px. The fixed header is 72px. The hero is at least 92vh. Desktop hero H1 is 72px and section H2 is generally 48px. Use Poppins for display, Inter for body, Montserrat for numeric stats, and Noto Nastaliq Urdu for Urdu.

ASSETS

Download every exact source image from the PRD asset manifest into public/assets. Keep the original bytes and natural aspect ratio. Do not use stock images, AI images, screenshots, or visually similar replacements. Use the exact inline Canada/Pakistan SVG from the PRD.

IMPLEMENTATION ORDER

1. Scaffold Next.js, Tailwind, fonts, icons, and GSAP.

2. Add design tokens and shared UI primitives.

3. Download assets and create typed product/content/localization data.

4. Build header, footer, and WhatsApp button.

5. Build all pages and responsive layout without animations.

6. Add exact metadata and route behavior.

7. Add Urdu/RTL switching and preserve the partial translations.

8. Add GSAP only after static pixel parity is complete.

9. Run responsive and visual-regression QA.

ANIMATION

Match the reference with subtle reveal motion only: hero opacity/y entry, hero image scale entry, staggered stats/cards, 24-30px scroll reveals, 300ms hover lift, 500ms category image zoom, quality-line reveal, moving map dot, FAQ height/chevron animation, and slow floating badges. Support prefers-reduced-motion and never leave content hidden if JavaScript is delayed.

ARCHITECTURE

Keep static copy and product data in typed data modules. Use server components by default. Use client components only for search, FAQ, language, header scroll state, admin-mode toggle, mobile menu, and GSAP. Product slug pages must use generateStaticParams/generateMetadata and reuse the catalog visual. Put authentication behind an adapter and do not invent the authenticated dashboard.

QA GATE

Compare every route at 1363x936 and also verify 390, 640, 768, 1024, and 1280 widths. Excluding the Lovable badge and browser rendering variance, major visual anchor points must be within 4px. Verify exact images, copy, heading hierarchy, links, header scroll state, search/no-results state, inert category chip behavior, Urdu RTL state, FAQ state, cart empty state, admin sign-in/create toggle, metadata, noindex routes, and 404. Do not call the build complete while any visible mismatch remains.

Do not ask routine design questions. Follow the PRD exactly and report only genuine blockers such as an unavailable source image or missing authentication access.

END OF SPECIFICATION
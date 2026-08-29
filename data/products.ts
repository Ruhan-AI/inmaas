export type ProductCategory = 'syrup' | 'tablet' | 'capsule' | 'injection';

export interface ProductVariant {
  /** Strength or pack size shown to the customer, e.g. "250 mg". */
  label: string;
  /** Maximum retail price in PKR. */
  mrp: number;
  /** Pack presentation for this variant, e.g. "10 Tablets". */
  pack?: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Active ingredient / generic name as printed on the carton. */
  generic: string;
  category: ProductCategory;
  categoryLabel: string;
  /** Dosage form shown on the card chip, e.g. "Syrup". */
  form: string;
  shortDescription: string;
  metaDescription: string;
  /** Primary (WebP) artwork. */
  image: string;
  /** JPEG fallback for the same artwork. */
  imageFallback: string;
  variants: ProductVariant[];
  searchTerms?: string[];
}

export const CATEGORIES: { id: ProductCategory | 'all'; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All', shortLabel: 'All' },
  { id: 'syrup', label: 'Syrups', shortLabel: 'Syrups' },
  { id: 'tablet', label: 'Tablets', shortLabel: 'Tablets' },
  { id: 'capsule', label: 'Capsules', shortLabel: 'Capsules' },
  { id: 'injection', label: 'Injections', shortLabel: 'Injections' },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'natocid-syrup',
    name: 'Natocid',
    generic: 'Antacid Suspension',
    category: 'syrup',
    categoryLabel: 'Syrups',
    form: 'Syrup',
    shortDescription: 'Fast relief from acidity and indigestion.',
    metaDescription:
      'Natocid antacid suspension instantly neutralises excess stomach acid, giving fast, lasting relief from indigestion, dyspepsia, flatulence, bloating and gas. Sugar free and safe for daily use.',
    image: '/assets/natocid-syrup.webp',
    imageFallback: '/assets/natocid-syrup.jpg',
    variants: [{ label: '120 ml', mrp: 275, pack: '120 ml Suspension' }],
    searchTerms: [
      'natocid', 'antacid', 'syrup', 'suspension', 'acidity', 'indigestion',
      'heartburn', 'dyspepsia', 'bloating', 'gas', 'flatulence', 'digestive',
    ],
  },
  {
    slug: 'newagada-syrup',
    name: 'Newagada',
    generic: 'Multivitamins & Minerals',
    category: 'syrup',
    categoryLabel: 'Syrups',
    form: 'Syrup',
    shortDescription: 'Supports daily energy and immunity.',
    metaDescription:
      'Newagada is a complete multivitamin and mineral supplement syrup with vitamins A, C, E, B1, B2, B6, B12 and PP — formulated to support daily energy, immunity and overall wellness.',
    image: '/assets/newagada-syrup.webp',
    imageFallback: '/assets/newagada-syrup.jpg',
    variants: [{ label: '120 ml', mrp: 340, pack: '120 ml Supplement' }],
    searchTerms: [
      'newagada', 'multivitamin', 'multivitamins', 'minerals', 'supplement',
      'energy', 'immunity', 'syrup', 'vitamins', 'vitamin c', 'b12',
    ],
  },
  {
    slug: 'newtizer-syrup',
    name: 'Newtizer',
    generic: 'Appetizer + Multinutrient',
    category: 'syrup',
    categoryLabel: 'Syrups',
    form: 'Syrup',
    shortDescription: 'For a healthy appetite and digestion.',
    metaDescription:
      'Newtizer appetiser syrup combines appetite support with a multinutrient supplement to encourage a healthy appetite, better digestion and general well-being — ideal for children who eat poorly.',
    image: '/assets/newtizer-syrup.webp',
    imageFallback: '/assets/newtizer-syrup.jpg',
    variants: [{ label: '120 ml', mrp: 350, pack: '120 ml Syrup' }],
    searchTerms: [
      'newtizer', 'appetizer', 'appetiser', 'appetite', 'digestion',
      'multinutrient', 'supplement', 'syrup', 'children', 'kids',
    ],
  },
  {
    slug: 'newtocare-cough-syrup',
    name: 'Newtocare',
    generic: 'Ivy Leaf Extract',
    category: 'syrup',
    categoryLabel: 'Syrups',
    form: 'Cough Syrup',
    shortDescription: 'Dual action for dry and productive cough.',
    metaDescription:
      'Newtocare cough syrup with standardised Ivy Leaf Extract gives dual-action relief for dry and productive cough. Non-addictive, suitable for all seasons.',
    image: '/assets/newtocare-syrup.webp',
    imageFallback: '/assets/newtocare-syrup.jpg',
    variants: [{ label: '120 ml', mrp: 240, pack: '120 ml Syrup' }],
    searchTerms: [
      'newtocare', 'cough', 'ivy leaf', 'ivy leaf extract', 'syrup',
      'dry cough', 'productive cough', 'chest', 'mucus', 'airways', 'herbal',
    ],
  },
  {
    slug: 'alfaton-d-tablet',
    name: 'Alfaton-D',
    generic: 'Vitamin D3 10,000 IU',
    category: 'tablet',
    categoryLabel: 'Tablets',
    form: 'Chewable Tablet',
    shortDescription: 'Builds strong bones and teeth.',
    metaDescription:
      'Alfaton-D chewable tablets deliver Vitamin D3 10,000 IU to correct deficiency and support bone strength, teeth, immune health and calcium absorption.',
    image: '/assets/alfaton-d-tablet.webp',
    imageFallback: '/assets/alfaton-d-tablet.jpg',
    variants: [{ label: '10,000 IU', mrp: 850, pack: '30 Chewable Tablets' }],
    searchTerms: [
      'alfaton', 'alfaton-d', 'alfaton d', 'vitamin d', 'vitamin d3',
      'cholecalciferol', 'chewable', 'tablet', 'bones', 'teeth', 'calcium', 'immunity',
    ],
  },
  {
    slug: 'athlukat-tablet',
    name: 'Athlukat',
    generic: 'Montelukast Sodium',
    category: 'tablet',
    categoryLabel: 'Tablets',
    form: 'Tablet & Sachet',
    shortDescription: 'Maintains strong airways and reduces allergy symptoms.',
    metaDescription:
      'Athlukat (Montelukast Sodium) is a leukotriene receptor antagonist for the prophylaxis and chronic management of asthma and relief of allergic rhinitis. Available as 4 mg paediatric sachets, 5 mg and 10 mg tablets.',
    image: '/assets/athlukat-tablet.webp',
    imageFallback: '/assets/athlukat-tablet.jpg',
    variants: [
      { label: '4 mg', mrp: 460, pack: '14 Sachets — paediatric oral powder' },
      { label: '5 mg', mrp: 360, pack: '30 Tablets' },
      { label: '10 mg', mrp: 560, pack: '21 Chewable Tablets' },
    ],
    searchTerms: [
      'athlukat', 'montelukast', 'montelukast sodium', 'asthma', 'allergy',
      'allergic rhinitis', 'airways', 'tablet', 'sachet', 'paediatric', 'pediatric',
    ],
  },
  {
    slug: 'athpric-tablet',
    name: 'Athpric',
    generic: 'Ciprofloxacin USP',
    category: 'tablet',
    categoryLabel: 'Tablets',
    form: 'Tablet',
    shortDescription: 'Broad-spectrum cover for bacterial infections.',
    metaDescription:
      'Athpric (Ciprofloxacin USP) is a broad-spectrum fluoroquinolone antibiotic effective against a wide range of Gram-positive and Gram-negative bacterial infections. Available in 250 mg and 500 mg strengths.',
    image: '/assets/athpric-tablet.webp',
    imageFallback: '/assets/athpric-tablet.jpg',
    variants: [
      { label: '250 mg', mrp: 290, pack: '10 Tablets' },
      { label: '500 mg', mrp: 590, pack: '10 Tablets' },
    ],
    searchTerms: [
      'athpric', 'ciprofloxacin', 'cipro', 'antibiotic', 'antibacterial',
      'bacterial', 'infection', 'fluoroquinolone', 'tablet',
    ],
  },
  {
    slug: 'evemark-capsule',
    name: 'Evemark',
    generic: 'Evening Primrose Oil 500 mg',
    category: 'capsule',
    categoryLabel: 'Capsules',
    form: 'Softgel Capsule',
    shortDescription: 'Supports fertility, skin health and hormone balance.',
    metaDescription:
      'Evemark softgel capsules provide 500 mg Evening Primrose Oil rich in Gamma-Linolenic Acid (GLA) to support male and female fertility, healthy skin, balanced immune response and relief from mild PMS discomfort.',
    image: '/assets/evemark-capsule.webp',
    imageFallback: '/assets/evemark-capsule.jpg',
    variants: [{ label: '500 mg', mrp: 1125, pack: '20 Softgel Capsules' }],
    searchTerms: [
      'evemark', 'evening primrose oil', 'evening prime rose', 'primrose',
      'gla', 'softgel', 'capsule', 'fertility', 'skin', 'hormone', 'pms',
    ],
  },
  {
    slug: 'fenglar-injection',
    name: 'Fenglar',
    generic: 'Ceftriaxone',
    category: 'injection',
    categoryLabel: 'Injections',
    form: 'I.M. Injection',
    shortDescription: 'Strong broad-spectrum defence, fast-acting recovery.',
    metaDescription:
      'Fenglar (Ceftriaxone) is a third-generation cephalosporin lyophilised powder for injection, strictly for intramuscular (I.M.) use, delivering potent broad-spectrum antibacterial cover.',
    image: '/assets/fenglar-injection.webp',
    imageFallback: '/assets/fenglar-injection.jpg',
    variants: [
      { label: '250 mg', mrp: 199.78, pack: '1 Vial — I.M. use only' },
      { label: '500 mg', mrp: 334.59, pack: '1 Vial — I.M. use only' },
    ],
    searchTerms: [
      'fenglar', 'ceftriaxone', 'injection', 'im', 'i.m.', 'intramuscular',
      'vial', 'antibiotic', 'antibacterial', 'cephalosporin', 'hospital',
    ],
  },
];

const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug)!;

/** Rail order: syrups first, then tablets, capsules and injections. */
export const FEATURED_PRODUCTS: Product[] = [
  bySlug('newagada-syrup'),
  bySlug('natocid-syrup'),
  bySlug('newtocare-cough-syrup'),
  bySlug('newtizer-syrup'),
  bySlug('athlukat-tablet'),
  bySlug('alfaton-d-tablet'),
  bySlug('athpric-tablet'),
  bySlug('evemark-capsule'),
  bySlug('fenglar-injection'),
];

export const CATEGORY_GROUPS: { id: ProductCategory; title: string; products: Product[] }[] = [
  { id: 'syrup', title: 'Syrups', products: PRODUCTS.filter((p) => p.category === 'syrup') },
  { id: 'tablet', title: 'Tablets', products: PRODUCTS.filter((p) => p.category === 'tablet') },
  { id: 'capsule', title: 'Capsules', products: PRODUCTS.filter((p) => p.category === 'capsule') },
  { id: 'injection', title: 'Injections', products: PRODUCTS.filter((p) => p.category === 'injection') },
];

/** Formats a PKR amount, keeping paisa only when the price actually has it. */
export function formatPkr(amount: number): string {
  const hasPaisa = Math.round(amount * 100) % 100 !== 0;
  return `Rs ${amount.toLocaleString('en-PK', {
    minimumFractionDigits: hasPaisa ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

/** "Rs 290" for a single variant, "Rs 290 – Rs 590" when strengths differ. */
export function priceLabel(product: Product): string {
  const prices = product.variants.map((v) => v.mrp);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatPkr(min) : `${formatPkr(min)} – ${formatPkr(max)}`;
}

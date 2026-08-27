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

export const CATEGORIES: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'syrup', label: 'Syrups' },
  { id: 'tablet', label: 'Tablets' },
  { id: 'capsule', label: 'Capsules' },
  { id: 'iv', label: 'IV & IM Solutions' },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'natocid-syrup',
    name: 'Natocid Syrup',
    category: 'syrup',
    categoryLabel: 'Syrups',
    shortDescription: 'Antacid — fast relief from acidity and indigestion',
    metaDescription:
      'A smoothly-neutralising antacid suspension providing rapid, long-lasting relief from hyperacidity, heartburn, and indigestion.',
    image: '/assets/natocid-v2.jpg',
    searchTerms: ['natocid', 'antacid', 'syrup', 'acidity', 'indigestion', 'heartburn', 'digestive'],
  },
  {
    slug: 'newagada-syrup',
    name: 'Newagada Syrup',
    category: 'syrup',
    categoryLabel: 'Syrups',
    shortDescription: 'Multivitamins & Minerals — daily energy and immunity',
    metaDescription:
      'A comprehensive multivitamin and mineral food supplement syrup formulated to support daily energy, immunity, and overall wellness for children and adults.',
    image: '/assets/newagada-v2.jpg',
    searchTerms: ['newagada', 'multivitamin', 'minerals', 'energy', 'immunity', 'syrup', 'vitamins'],
  },
  {
    slug: 'newtizer-syrup',
    name: 'Newtizer Syrup',
    category: 'syrup',
    categoryLabel: 'Syrups',
    shortDescription: 'Appetizer — for a healthy appetite and digestion',
    metaDescription:
      'A herbal appetite stimulant syrup that supports healthy appetite, digestion, and general well-being — ideal for children with poor appetite.',
    image: '/assets/newtizer-v2.jpg',
    searchTerms: ['newtizer', 'appetizer', 'appetite', 'digestion', 'syrup', 'herbal'],
  },
  {
    slug: 'newtocare-cough-syrup',
    name: 'Newtocare Cough Syrup',
    category: 'syrup',
    categoryLabel: 'Syrups',
    shortDescription: 'Ivy Leaf Extract — dual action for dry & productive cough',
    metaDescription:
      'A herbal cough syrup with standardised Ivy Leaf Extract that relieves both dry and productive cough by loosening mucus and soothing the airways.',
    image: '/assets/newtocare-v2.jpg',
    searchTerms: ['newtocare', 'cough', 'ivy leaf', 'extract', 'syrup', 'mucus', 'airways'],
  },
  {
    slug: 'alfaton-d-tablet',
    name: 'Alfaton-D Tablet',
    category: 'tablet',
    categoryLabel: 'Tablets',
    shortDescription: 'Vitamin D3 100,000 IU — builds strong bones and teeth',
    metaDescription:
      'A high-strength Vitamin D3 chewable tablet formulated to correct deficiency and support bone strength, immune health, and calcium absorption.',
    image: '/assets/alfaton-d-v2.jpg',
    searchTerms: ['alfaton-d', 'alfaton', 'vitamin d3', 'tablet', 'bones', 'teeth', 'calcium'],
  },
  {
    slug: 'athlukat-tablet',
    name: 'Athlukat Tablet',
    category: 'tablet',
    categoryLabel: 'Tablets',
    shortDescription: 'Montelukast — manages asthma and allergy symptoms',
    metaDescription:
      'A selective leukotriene receptor antagonist for the prophylaxis and chronic treatment of asthma and relief of seasonal allergic rhinitis.',
    image: '/assets/athlukat-v2.jpg',
    searchTerms: ['athlukat', 'montelukast', 'asthma', 'allergy', 'tablet', 'rhinitis'],
  },
  {
    slug: 'athpric-tablet',
    name: 'Athpric Tablet',
    category: 'tablet',
    categoryLabel: 'Tablets',
    shortDescription: 'Ciprofloxacin 250/500 mg — effective for bacterial infections',
    metaDescription:
      'A broad-spectrum fluoroquinolone antibiotic effective against a wide range of Gram-positive and Gram-negative bacterial infections.',
    image: '/assets/athpric-v2.jpg',
    searchTerms: ['athpric', 'ciprofloxacin', 'antibiotic', 'bacterial', 'infections', 'tablet'],
  },
  {
    slug: 'evemark-capsule',
    name: 'Evemark Softgel Capsule',
    category: 'capsule',
    categoryLabel: 'Capsules',
    shortDescription: 'Evening Primrose Oil — skin health & hormone balance',
    metaDescription:
      'A premium Evening Primrose Oil softgel rich in Gamma-Linolenic Acid (GLA) that supports healthy skin, hormonal balance, and relief from PMS discomfort.',
    image: '/assets/evemark-v2.jpg',
    searchTerms: ['evemark', 'evening primrose oil', 'softgel', 'capsule', 'skin', 'hormone', 'gla'],
  },
  {
    slug: 'fenglar-iv',
    name: 'Fenglar Injection (IV)',
    category: 'iv',
    categoryLabel: 'IV & IM Solutions',
    shortDescription: 'Ceftriaxone 250/500 mg — strong broad-spectrum defence',
    metaDescription:
      'A third-generation cephalosporin lyophilised powder for intravenous use, providing potent broad-spectrum antibacterial coverage and rapid clinical recovery.',
    image: '/assets/fenglar-v2.jpg',
    searchTerms: ['fenglar', 'ceftriaxone', 'injection', 'iv', 'im', 'antibacterial', 'hospital'],
  },
];

// Featured rail order from section 5 of PRD:
// Newagada, Natocid, Newtocare, Newtizer, Athlukat, Alfaton-D, Athpric, Evemark, Fenglar
export const FEATURED_PRODUCTS: Product[] = [
  PRODUCTS[1], // Newagada
  PRODUCTS[0], // Natocid
  PRODUCTS[3], // Newtocare
  PRODUCTS[2], // Newtizer
  PRODUCTS[5], // Athlukat
  PRODUCTS[4], // Alfaton-D
  PRODUCTS[6], // Athpric
  PRODUCTS[7], // Evemark
  PRODUCTS[8], // Fenglar
];

export const CATEGORY_GROUPS = [
  {
    title: 'Syrups',
    products: PRODUCTS.filter((p) => p.category === 'syrup'),
  },
  {
    title: 'Tablets',
    products: PRODUCTS.filter((p) => p.category === 'tablet'),
  },
  {
    title: 'Capsules',
    products: PRODUCTS.filter((p) => p.category === 'capsule'),
  },
  {
    title: 'IV & IM Solutionss', // Preserving verified PRD quirk typo with double 's'
    products: PRODUCTS.filter((p) => p.category === 'iv'),
  },
];

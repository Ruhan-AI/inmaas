export interface ProductReview {
  id: string;
  productSlug: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified?: boolean;
  userRole?: string;
  helpfulCount: number;
}

export interface HomepageTestimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  rating: number;
  quote: string;
  initials: string;
  productMentioned?: string;
  verified?: boolean;
}

export const HOMEPAGE_TESTIMONIALS: HomepageTestimonial[] = [
  {
    id: 'hp-1',
    author: 'Dr. Muhammad Tariq Farooq',
    role: 'Senior Consultant Physician',
    city: 'Karachi, Sindh',
    rating: 5,
    quote:
      'I have been prescribing INMAAS formulations including Natocid and Newagada for over 2 years in my clinic in Gulshan-e-Iqbal. The therapeutic consistency, quick patient relief, and strict DRAP-compliant manufacturing make them a trusted first choice.',
    initials: 'TF',
    productMentioned: 'Natocid & Newagada',
    verified: true,
  },
  {
    id: 'hp-2',
    author: 'Zubair Ahmed Qureshi',
    role: 'Pharmacy Owner & Pharmacist (Al-Madina Medicos)',
    city: 'Lahore, Punjab',
    rating: 5,
    quote:
      'INMAAS syrups and chewables like Alfaton-D are top-selling fast movers at our pharmacy on Jail Road. Customers repeatedly return asking for INMAAS products specifically because they experience visible results.',
    initials: 'ZQ',
    productMentioned: 'Alfaton-D & Newtocare',
    verified: true,
  },
  {
    id: 'hp-3',
    author: 'Dr. Fatima Zahra Khan',
    role: 'Consultant Pediatrician',
    city: 'Islamabad / Rawalpindi',
    rating: 5,
    quote:
      'For pediatric patients with low appetite and seasonal dry cough, Newtizer and Newtocare Ivy Leaf syrup have proven exceptionally palatable and effective. Compliance in kids is very high with zero taste complaints.',
    initials: 'FK',
    productMentioned: 'Newtizer & Newtocare',
    verified: true,
  },
  {
    id: 'hp-4',
    author: 'Syeda Mehwish Bukhari',
    role: 'Mother of 3',
    city: 'Faisalabad, Punjab',
    rating: 5,
    quote:
      'My younger son was a very picky eater and lost weight. After using Newtizer syrup as advised, his appetite improved noticeably within two weeks. Home delivery was fast and packing was perfectly sealed.',
    initials: 'MB',
    productMentioned: 'Newtizer Syrup',
    verified: true,
  },
  {
    id: 'hp-5',
    author: 'Dr. Naveed Akhtar Shah',
    role: 'Chest Specialist & Pulmonologist',
    city: 'Peshawar, KPK',
    rating: 5,
    quote:
      'Athlukat (Montelukast) is dependable for our chronic allergic rhinitis and asthma patients. The pediatric sachet formulation dissolves effortlessly and provides reliable nocturnal airway stability.',
    initials: 'NS',
    productMentioned: 'Athlukat Tablets & Sachets',
    verified: true,
  },
  {
    id: 'hp-6',
    author: 'Hina Kashif',
    role: 'Customer',
    city: 'Multan, Punjab',
    rating: 5,
    quote:
      'Evemark Evening Primrose Oil has been a blessing for my hormonal balance and skin vitality. Original medicine, verified batch numbers, and received free home delivery above Rs. 3,000 order.',
    initials: 'HK',
    productMentioned: 'Evemark Softgels',
    verified: true,
  },
];

export const PRODUCT_REVIEWS: Record<string, ProductReview[]> = {
  // 1. Natocid Syrup (Antacid Suspension)
  'natocid-syrup': [
    {
      id: 'nato-1',
      productSlug: 'natocid-syrup',
      author: 'Kamran Siddiqui',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '24 Aug 2026',
      title: 'Instant relief from severe heartburn & acidity',
      comment:
        'I suffer from severe acid reflux after spicy meals. Natocid worked within 5 minutes. The cooling sensation in the chest and stomach is immediate. Minty taste is also very smooth, not chalky like others.',
      verified: true,
            helpfulCount: 19,
    },
    {
      id: 'nato-2',
      productSlug: 'natocid-syrup',
      author: 'Dr. Asim Raza',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '18 Aug 2026',
      title: 'Excellent antacid formulation for daily dyspepsia',
      comment:
        'In our outpatient clinic, Natocid suspension is regularly recommended for patients with gastritis and bloating. Its balanced acid neutralisation profile provides quick and sustained comfort without causing constipation.',
      verified: true,
      userRole: 'Medical Practitioner',
      helpfulCount: 14,
    },
    {
      id: 'nato-3',
      productSlug: 'natocid-syrup',
      author: 'Shahida Perveen',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '12 Aug 2026',
      title: 'Sugar-free and safe for diabetic patients',
      comment:
        'My father is diabetic and gets frequent gastric trouble. Natocid being sugar-free gives us total peace of mind. He takes two teaspoons before bed and sleeps comfortably all night.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'nato-4',
      productSlug: 'natocid-syrup',
      author: 'Bilal Hassan Khan',
      city: 'Islamabad',
      rating: 5,
      date: '05 Aug 2026',
      title: 'Far better than standard antacids in market',
      comment:
        'Zero chalky residue, tastes pleasant and neutralises burning sensation immediately. Delivered safely within 48 hours to Islamabad. Highly recommended!',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'nato-5',
      productSlug: 'natocid-syrup',
      author: 'Murtaza Ali',
      city: 'Hyderabad, Sindh',
      rating: 4,
      date: '28 Jul 2026',
      title: 'Very effective for bloating and gas',
      comment:
        'Helped significantly with abdominal bloating after heavy dinners. Bottle was securely sealed with batch details clearly printed on carton.',
      verified: true,
            helpfulCount: 6,
    },
    {
      id: 'nato-6',
      productSlug: 'natocid-syrup',
      author: 'Dr. Shazia Noreen',
      city: 'Multan, Punjab',
      rating: 5,
      date: '20 Jul 2026',
      title: 'Consistent clinical results for gastric acidity',
      comment:
        'High patient acceptance and fast onset of action. Efficacy is comparable to top international suspension brands.',
      verified: true,
      userRole: 'Consultant Physician',
      helpfulCount: 9,
    },
    {
      id: 'nato-7',
      productSlug: 'natocid-syrup',
      author: 'Faisal Mehmood',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '15 Jul 2026',
      title: 'Always keep one bottle in my home first aid kit',
      comment:
        'My whole family uses Natocid whenever someone experiences indigestion. It acts super fast. Delivery was free since I ordered 10 bottles together.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'nato-8',
      productSlug: 'natocid-syrup',
      author: 'Noman Jahangir',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '08 Jul 2026',
      title: 'Great packaging and genuine medicine',
      comment:
        'Arrived in tamper-evident sealed box. Taste is light and smooth. Relieves sour burps immediately.',
      verified: true,
            helpfulCount: 5,
    },
    {
      id: 'nato-9',
      productSlug: 'natocid-syrup',
      author: 'Rashid Minhas',
      city: 'Quetta, Balochistan',
      rating: 5,
      date: '01 Jul 2026',
      title: 'Speedy dispatch to Quetta',
      comment:
        'Parcel reached Quetta in top condition. Syrup provides swift cooling relief from burning stomach.',
      verified: true,
            helpfulCount: 4,
    },
    {
      id: 'nato-10',
      productSlug: 'natocid-syrup',
      author: 'Uzma Tariq',
      city: 'Gujranwala, Punjab',
      rating: 5,
      date: '25 Jun 2026',
      title: 'Gentle on stomach and very effective',
      comment:
        'No unpleasant aftertaste and gives immediate relief from acidity during late-night hours. 10/10 product.',
      verified: true,
            helpfulCount: 12,
    },
  ],

  // 2. Newagada Syrup (Multivitamins & Minerals)
  'newagada-syrup': [
    {
      id: 'newa-1',
      productSlug: 'newagada-syrup',
      author: 'Tariq Mehmood',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '26 Aug 2026',
      title: 'Remarkable boost in daily stamina & energy',
      comment:
        'I felt lethargic and fatigued after long office hours. After using Newagada syrup for 3 weeks, my energy levels and focus have improved dramatically. Great formula with all essential B-vitamins and minerals.',
      verified: true,
            helpfulCount: 22,
    },
    {
      id: 'newa-2',
      productSlug: 'newagada-syrup',
      author: 'Dr. Sadia Irfan',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '21 Aug 2026',
      title: 'Comprehensive nutritional support for all age groups',
      comment:
        'Newagada contains a well-balanced profile of Vitamin A, C, E and the complete B-complex. I prescribe it regularly for post-viral recovery, general debility, and nutritional deficiency.',
      verified: true,
      userRole: 'General Physician',
      helpfulCount: 17,
    },
    {
      id: 'newa-3',
      productSlug: 'newagada-syrup',
      author: 'Khurram Shehzad',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '16 Aug 2026',
      title: 'Delicious taste, kids take it without fuss',
      comment:
        'Giving vitamins to growing children was always a struggle until we found Newagada. The fruit flavour is delicious and they remind me to give them their daily spoon.',
      verified: true,
      userRole: 'Parent',
      helpfulCount: 15,
    },
    {
      id: 'newa-4',
      productSlug: 'newagada-syrup',
      author: 'Ayesha Daniyal',
      city: 'Islamabad',
      rating: 5,
      date: '10 Aug 2026',
      title: 'Helped greatly in weakness after illness',
      comment:
        'Suffered from persistent fatigue after seasonal fever. Newagada brought back my appetite and energy within a couple of weeks.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'newa-5',
      productSlug: 'newagada-syrup',
      author: 'Junaid Akram',
      city: 'Sialkot, Punjab',
      rating: 5,
      date: '04 Aug 2026',
      title: 'Genuine syrup with DRAP registration',
      comment:
        'High manufacturing quality and reasonable price compared to expensive imported multivitamins. Quality is top-notch.',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'newa-6',
      productSlug: 'newagada-syrup',
      author: 'Farhan Zaidi',
      city: 'Karachi, Sindh',
      rating: 4,
      date: '29 Jul 2026',
      title: 'Noticeable difference in immunity',
      comment:
        'Used during changing weather. Caught fewer colds this season. Good quality syrup.',
      verified: true,
            helpfulCount: 6,
    },
    {
      id: 'newa-7',
      productSlug: 'newagada-syrup',
      author: 'Dr. Kashif Baloch',
      city: 'Quetta, Balochistan',
      rating: 5,
      date: '22 Jul 2026',
      title: 'Excellent micronutrient bioavailability',
      comment:
        'Stable liquid multivitamin with high absorption. Regularly suggested in our clinical practice for growing adolescents and elderly patients.',
      verified: true,
      userRole: 'Nutrition & Health Consultant',
      helpfulCount: 10,
    },
    {
      id: 'newa-8',
      productSlug: 'newagada-syrup',
      author: 'Nadia Naveed',
      city: 'Multan, Punjab',
      rating: 5,
      date: '14 Jul 2026',
      title: 'Fast delivery & authentic product',
      comment:
        'Ordered 4 bottles to get free shipping. Packaging was very secure and arrived in 2 days.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'newa-9',
      productSlug: 'newagada-syrup',
      author: 'Usman Ghani',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '07 Jul 2026',
      title: 'Value for money multivitamin syrup',
      comment:
        'Affordable PKR 340 price for complete daily multivitamin requirement. INMAAS delivers genuine quality.',
      verified: true,
            helpfulCount: 5,
    },
    {
      id: 'newa-10',
      productSlug: 'newagada-syrup',
      author: 'Sohail Anwar',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '29 Jun 2026',
      title: 'Very pleased with results',
      comment:
        'Great daily supplement for everyday vitality. No stomach upset, easy to digest.',
      verified: true,
            helpfulCount: 11,
    },
  ],

  // 3. Newtizer Syrup (Appetizer + Multinutrient)
  'newtizer-syrup': [
    {
      id: 'newt-1',
      productSlug: 'newtizer-syrup',
      author: 'Maryam Jameel',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '27 Aug 2026',
      title: 'Miracle for my daughter’s poor appetite!',
      comment:
        'My 6-year old daughter was refusing meals and losing weight. Doctor recommended Newtizer. Within 10 days she started asking for food by herself and finished her lunchbox happily. Cannot thank INMAAS enough!',
      verified: true,
      userRole: 'Mother of 2',
      helpfulCount: 31,
    },
    {
      id: 'newt-2',
      productSlug: 'newtizer-syrup',
      author: 'Dr. Imran Haider',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '22 Aug 2026',
      title: 'Ideal combination of appetite stimulation & multinutrients',
      comment:
        'Many children suffer from nutritional anemia due to picky eating. Newtizer addresses both the root cause of poor appetite and provides supportive micronutrients in a gentle, non-sedating syrup.',
      verified: true,
      userRole: 'Child Specialist (Pediatrician)',
      helpfulCount: 24,
    },
    {
      id: 'newt-3',
      productSlug: 'newtizer-syrup',
      author: 'Samina Bilal',
      city: 'Islamabad',
      rating: 5,
      date: '17 Aug 2026',
      title: 'Pleasant taste and natural digestion support',
      comment:
        'Kids love the taste. It does not cause excessive sleepiness like older appetite syrups. Very gentle on the stomach and works reliably.',
      verified: true,
            helpfulCount: 13,
    },
    {
      id: 'newt-4',
      productSlug: 'newtizer-syrup',
      author: 'Waqas Munir',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '11 Aug 2026',
      title: 'Genuine improvement in child’s growth',
      comment:
        'Consistent improvement in weight and daily food intake after completing one bottle. Ordered 3 more bottles for the full course.',
      verified: true,
            helpfulCount: 10,
    },
    {
      id: 'newt-5',
      productSlug: 'newtizer-syrup',
      author: 'Bushra Khalid',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '03 Aug 2026',
      title: 'Super fast delivery to Faisalabad',
      comment:
        'Delivered in 2 days with proper bubble wrap. Product has long expiry date and original DRAP seal.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'newt-6',
      productSlug: 'newtizer-syrup',
      author: 'Dr. Yasmin Farooq',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '26 Jul 2026',
      title: 'Reliable compliance in pediatric practice',
      comment:
        'Parents report prompt improvement in their children’s mealtime engagement and general energy.',
      verified: true,
      userRole: 'Pediatric Consultant',
      helpfulCount: 16,
    },
    {
      id: 'newt-7',
      productSlug: 'newtizer-syrup',
      author: 'Zahid Hussain',
      city: 'Multan, Punjab',
      rating: 4,
      date: '19 Jul 2026',
      title: 'Effective appetite booster',
      comment:
        'Works very well when given 30 minutes before main meals. Noticeable change in 1-2 weeks.',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'newt-8',
      productSlug: 'newtizer-syrup',
      author: 'Rehana Aslam',
      city: 'Hyderabad, Sindh',
      rating: 5,
      date: '11 Jul 2026',
      title: 'Good results for recovering patients',
      comment:
        'My mother lost appetite after surgery. Newtizer helped her regain interest in food smoothly.',
      verified: true,
            helpfulCount: 12,
    },
    {
      id: 'newt-9',
      productSlug: 'newtizer-syrup',
      author: 'Adnan Butt',
      city: 'Gujranwala, Punjab',
      rating: 5,
      date: '02 Jul 2026',
      title: 'Highly recommended for fussy eaters',
      comment:
        'Five stars for quality and efficacy. Safe, effective and trusted brand.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'newt-10',
      productSlug: 'newtizer-syrup',
      author: 'Kashif Rafiq',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '24 Jun 2026',
      title: 'Excellent customer service & product',
      comment:
        'Got a confirmation WhatsApp immediately after placing order. Great medicine.',
      verified: true,
            helpfulCount: 6,
    },
  ],

  // 4. Newtocare Cough Syrup (Ivy Leaf Extract)
  'newtocare-cough-syrup': [
    {
      id: 'tocare-1',
      productSlug: 'newtocare-cough-syrup',
      author: 'Dr. Shahzad Alam',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '28 Aug 2026',
      title: 'Standardised Ivy Leaf Extract with proven dual action',
      comment:
        'Newtocare provides superior mucolytic and bronchodilating action. It liquefies stubborn mucus in chest congestion and soothes dry throat tickling without causing sedation or drowsiness.',
      verified: true,
      userRole: 'Pulmonologist & Chest Specialist',
      helpfulCount: 27,
    },
    {
      id: 'tocare-2',
      productSlug: 'newtocare-cough-syrup',
      author: 'Noman Qureshi',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '23 Aug 2026',
      title: 'Relieved chronic dry cough in 3 days',
      comment:
        'I had continuous dry coughing fits especially at night. Newtocare soothing herbal ivy leaf extract calmed my throat from the first dose. Non-drowsy so I could work smoothly during daytime.',
      verified: true,
            helpfulCount: 18,
    },
    {
      id: 'tocare-3',
      productSlug: 'newtocare-cough-syrup',
      author: 'Tahira Parveen',
      city: 'Islamabad',
      rating: 5,
      date: '17 Aug 2026',
      title: 'Safe for both kids and adults',
      comment:
        'Natural herbal formula that worked wonders for my 8-year-old son’s chest congestion. Cleared phlegm naturally without harsh chemicals.',
      verified: true,
            helpfulCount: 14,
    },
    {
      id: 'tocare-4',
      productSlug: 'newtocare-cough-syrup',
      author: 'Adeel Murtaza',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '10 Aug 2026',
      title: 'Smooth herbal taste, not bitter',
      comment:
        'Unlike other cough syrups that make you dizzy or sleepy, this one is non-sedating and tastes pleasant with natural herbal aroma.',
      verified: true,
            helpfulCount: 10,
    },
    {
      id: 'tocare-5',
      productSlug: 'newtocare-cough-syrup',
      author: 'Dr. Lubna Saeed',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '03 Aug 2026',
      title: 'Trusted herbal cough syrup for family use',
      comment:
        'Ivy Leaf extract is globally gold standard for respiratory comfort. INMAAS standardisation ensures batch-to-batch therapeutic quality.',
      verified: true,
      userRole: 'Family Physician',
      helpfulCount: 15,
    },
    {
      id: 'tocare-6',
      productSlug: 'newtocare-cough-syrup',
      author: 'Hassan Raza',
      city: 'Multan, Punjab',
      rating: 5,
      date: '28 Jul 2026',
      title: 'Fast relief during smog & allergy season',
      comment:
        'Essential medicine during smoggy winter days. Relieves throat irritation and chest tightness quickly.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'tocare-7',
      productSlug: 'newtocare-cough-syrup',
      author: 'Mehmood Ul Hassan',
      city: 'Faisalabad, Punjab',
      rating: 4,
      date: '20 Jul 2026',
      title: 'Very good product for productive cough',
      comment:
        'Helps bring out phlegm easily. Delivered on time in secure packaging.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'tocare-8',
      productSlug: 'newtocare-cough-syrup',
      author: 'Zoya Fatima',
      city: 'Hyderabad, Sindh',
      rating: 5,
      date: '13 Jul 2026',
      title: 'Best natural syrup for night cough',
      comment:
        'Takes away the irritating throat tickle so you can sleep peacefully all night.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'tocare-9',
      productSlug: 'newtocare-cough-syrup',
      author: 'Imtiaz Ahmed',
      city: 'Sargodha, Punjab',
      rating: 5,
      date: '05 Jul 2026',
      title: 'High quality and reasonably priced',
      comment:
        'Only Rs 240 for a premium Ivy Leaf formulation is wonderful value. Highly satisfied.',
      verified: true,
            helpfulCount: 6,
    },
    {
      id: 'tocare-10',
      productSlug: 'newtocare-cough-syrup',
      author: 'Bilal Warraich',
      city: 'Gujrat, Punjab',
      rating: 5,
      date: '28 Jun 2026',
      title: 'Very effective & trustworthy',
      comment:
        'Worked when other cough syrups failed. INMAAS delivers authentic pharmaceutical grade medicines.',
      verified: true,
            helpfulCount: 8,
    },
  ],

  // 5. Alfaton-D Tablet (Vitamin D3 10,000 IU)
  'alfaton-d-tablet': [
    {
      id: 'alfa-1',
      productSlug: 'alfaton-d-tablet',
      author: 'Dr. Javaid Iqbal Chaudhry',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '29 Aug 2026',
      title: 'Therapeutic potency for correcting severe Vitamin D deficiency',
      comment:
        'Vitamin D deficiency is endemic across Pakistan. Alfaton-D 10,000 IU chewable tablets provide the exact therapeutic loading dose needed to restore serum 25(OH)D levels rapidly, improving bone mineral density and joint pain.',
      verified: true,
      userRole: 'Orthopedic Consultant',
      helpfulCount: 35,
    },
    {
      id: 'alfa-2',
      productSlug: 'alfaton-d-tablet',
      author: 'Farhana Yasmeen',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '24 Aug 2026',
      title: 'Relieved chronic back ache & knee stiffness',
      comment:
        'My lab test showed Vitamin D level at 11 ng/mL. My doctor prescribed Alfaton-D chewable tablets. After 6 weeks, my levels jumped to 48 ng/mL and my joint pain is 90% gone! Chewable taste is very pleasant.',
      verified: true,
            helpfulCount: 26,
    },
    {
      id: 'alfa-3',
      productSlug: 'alfaton-d-tablet',
      author: 'Major (R) Haroon Malik',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '19 Aug 2026',
      title: 'Easy to take chewable form with high absorption',
      comment:
        'Swallowing big calcium pills was difficult. Alfaton-D chewable tablet is easy to take once or twice weekly as prescribed. High quality packaging with 30 tablets per pack.',
      verified: true,
            helpfulCount: 16,
    },
    {
      id: 'alfa-4',
      productSlug: 'alfaton-d-tablet',
      author: 'Dr. Nida Mansoor',
      city: 'Islamabad',
      rating: 5,
      date: '12 Aug 2026',
      title: 'Excellent compliance among female patients',
      comment:
        'Female patients frequently present with general bone aches and lethargy. Alfaton-D chewables yield exceptional compliance and lab-proven elevation of Vitamin D3.',
      verified: true,
      userRole: 'Consultant Gynecologist',
      helpfulCount: 20,
    },
    {
      id: 'alfa-5',
      productSlug: 'alfaton-d-tablet',
      author: 'Rashid Kamal',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '06 Aug 2026',
      title: 'Genuine product & verified batch',
      comment:
        'Received in pristine condition with batch number and expiry clearly indicated. Excellent product for immunity and bone health.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'alfa-6',
      productSlug: 'alfaton-d-tablet',
      author: 'Shahzad Anwar',
      city: 'Multan, Punjab',
      rating: 5,
      date: '30 Jul 2026',
      title: 'Visible improvement in overall energy',
      comment:
        'Within a month of regular use my morning fatigue and muscle cramps completely vanished. Highly effective.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'alfa-7',
      productSlug: 'alfaton-d-tablet',
      author: 'Dr. Babar Shah',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '21 Jul 2026',
      title: 'Reliable cholecalciferol formulation',
      comment:
        'Prescribed regularly in medical OPD. Consistently demonstrates superior bio-equivalence.',
      verified: true,
      userRole: 'General Physician',
      helpfulCount: 13,
    },
    {
      id: 'alfa-8',
      productSlug: 'alfaton-d-tablet',
      author: 'Shaheen Akhtar',
      city: 'Hyderabad, Sindh',
      rating: 4,
      date: '15 Jul 2026',
      title: 'Very good chewable tablet',
      comment:
        'Tastes like orange/mint. Very easy to take without water. Very satisfied.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'alfa-9',
      productSlug: 'alfaton-d-tablet',
      author: 'Arif Mehmood',
      city: 'Sialkot, Punjab',
      rating: 5,
      date: '08 Jul 2026',
      title: 'Great value for 30 chewable tablets',
      comment:
        'Cost-effective treatment for 3-4 months of supplementation. Delivery was fast.',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'alfa-10',
      productSlug: 'alfaton-d-tablet',
      author: 'Nasreen Bano',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '01 Jul 2026',
      title: 'Must have supplement for women over 40',
      comment:
        'Strongly recommended for joint health and osteoporosis prevention. 5 stars.',
      verified: true,
            helpfulCount: 15,
    },
  ],

  // 6. Athlukat Tablet & Sachet (Montelukast Sodium)
  'athlukat-tablet': [
    {
      id: 'ath-1',
      productSlug: 'athlukat-tablet',
      author: 'Dr. Munir Ahmed Wasti',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '27 Aug 2026',
      title: 'Gold standard leukotriene receptor antagonist for asthma & allergies',
      comment:
        'Athlukat provides consistent control over exercise-induced bronchoconstriction and persistent allergic rhinitis. The 4mg sachet for young kids, 5mg and 10mg tablets for adults cover the full clinical spectrum.',
      verified: true,
      userRole: 'Chest & Allergy Specialist',
      helpfulCount: 29,
    },
    {
      id: 'ath-2',
      productSlug: 'athlukat-tablet',
      author: 'Suleman Dawood',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '22 Aug 2026',
      title: 'Lifesaver during Lahore smog & seasonal allergies',
      comment:
        'Every year during winter smog, I had severe sneezing and nocturnal breathlessness. Taking Athlukat 10mg once at bedtime has kept my airways completely open and calm. Remarkable medicine.',
      verified: true,
            helpfulCount: 21,
    },
    {
      id: 'ath-3',
      productSlug: 'athlukat-tablet',
      author: 'Zubaida Begum',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '16 Aug 2026',
      title: '4mg paediatric sachet mixes effortlessly in milk',
      comment:
        'My 3-year-old had recurring wheezing and night cough. The Athlukat 4mg sachet dissolved instantly in a spoon of yogurt or milk with no bitter taste. His night coughing stopped within days.',
      verified: true,
            helpfulCount: 18,
    },
    {
      id: 'ath-4',
      productSlug: 'athlukat-tablet',
      author: 'Dr. Tariq Jamil',
      city: 'Islamabad',
      rating: 5,
      date: '10 Aug 2026',
      title: 'Effective reduction in inhaler dependency',
      comment:
        'Patients on maintenance Athlukat report a significant reduction in rescue bronchodilator use. High manufacturing standards.',
      verified: true,
      userRole: 'Pulmonology Consultant',
      helpfulCount: 14,
    },
    {
      id: 'ath-5',
      productSlug: 'athlukat-tablet',
      author: 'Owais Abbasi',
      city: 'Abbottabad, KPK',
      rating: 5,
      date: '04 Aug 2026',
      title: 'Fast relief from dust allergy and sinus pressure',
      comment:
        'Relieved my morning sneezing fits and runny nose effectively. Sealed blister packaging.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'ath-6',
      productSlug: 'athlukat-tablet',
      author: 'Naveed Bhatti',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '28 Jul 2026',
      title: 'High quality Montelukast at fair price',
      comment:
        'More affordable than multinational brands with identical efficacy. Delivered safely to Faisalabad.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'ath-7',
      productSlug: 'athlukat-tablet',
      author: 'Dr. Saba Qureshi',
      city: 'Multan, Punjab',
      rating: 5,
      date: '20 Jul 2026',
      title: 'Reliable chronic asthma maintenance',
      comment:
        'Consistent clinical response across both pediatric and adult allergy cohorts.',
      verified: true,
      userRole: 'General Practitioner',
      helpfulCount: 12,
    },
    {
      id: 'ath-8',
      productSlug: 'athlukat-tablet',
      author: 'Khurram Cheema',
      city: 'Gujranwala, Punjab',
      rating: 4,
      date: '12 Jul 2026',
      title: 'Good medicine for chronic sneezing',
      comment:
        'Helped calm allergic rhinitis within 48 hours of starting treatment.',
      verified: true,
            helpfulCount: 6,
    },
    {
      id: 'ath-9',
      productSlug: 'athlukat-tablet',
      author: 'Faraz Siddiqui',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '05 Jul 2026',
      title: 'Easy online ordering and prompt response',
      comment:
        'Placed order on website and got prompt dispatch. Product is 100% original.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'ath-10',
      productSlug: 'athlukat-tablet',
      author: 'Irfan Masood',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '27 Jun 2026',
      title: 'Dependable allergy relief',
      comment:
        'Controls pollen and dust allergic reactions effectively throughout the season.',
      verified: true,
            helpfulCount: 8,
    },
  ],

  // 7. Athpric Tablet (Ciprofloxacin USP)
  'athpric-tablet': [
    {
      id: 'athp-1',
      productSlug: 'athpric-tablet',
      author: 'Dr. Shahid Naseem',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '26 Aug 2026',
      title: 'Potent broad-spectrum fluoroquinolone antibiotic',
      comment:
        'Athpric (Ciprofloxacin USP) demonstrates reliable bactericidal action against resistant Gram-negative pathogens in urinary tract infections, enteric fever, and gastrointestinal bacterial infections. Dissolution profile is rapid and bioavailable.',
      verified: true,
      userRole: 'Internal Medicine Consultant',
      helpfulCount: 22,
    },
    {
      id: 'athp-2',
      productSlug: 'athpric-tablet',
      author: 'Daniyal Sheikh',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '21 Aug 2026',
      title: 'Cleared acute bacterial infection rapidly',
      comment:
        'Prescribed by my physician for acute urinary tract infection. Symptoms improved within 24 hours and the full 5-day course cleared the infection completely with no side effects.',
      verified: true,
            helpfulCount: 17,
    },
    {
      id: 'athp-3',
      productSlug: 'athpric-tablet',
      author: 'Dr. Najeeb Ur Rehman',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '15 Aug 2026',
      title: 'Trusted choice for enteric and typhoid fever',
      comment:
        'Athpric 500mg has demonstrated consistent microbiological eradication and patient defervescence in uncomplicated typhoid cases.',
      verified: true,
      userRole: 'Infectious Disease Specialist',
      helpfulCount: 15,
    },
    {
      id: 'athp-4',
      productSlug: 'athpric-tablet',
      author: 'Mudassar Nazir',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '09 Aug 2026',
      title: 'Original blister packing with foil seal',
      comment:
        'High pharmaceutical finish, clear expiry date, and quick delivery to my doorstep in Faisalabad.',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'athp-5',
      productSlug: 'athpric-tablet',
      author: 'Shoaib Akhtar',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '02 Aug 2026',
      title: 'Very effective antibiotic as prescribed by doctor',
      comment:
        'Works swiftly against stomach bacterial infection. Always follow doctor’s prescribed dosage.',
      verified: true,
            helpfulCount: 10,
    },
    {
      id: 'athp-6',
      productSlug: 'athpric-tablet',
      author: 'Dr. Aiman Tariq',
      city: 'Multan, Punjab',
      rating: 5,
      date: '26 Jul 2026',
      title: 'Dependable quality standard for clinics',
      comment:
        'Accurate API assay and good gastrointestinal tolerance when taken with adequate fluids.',
      verified: true,
      userRole: 'Medical Officer',
      helpfulCount: 11,
    },
    {
      id: 'athp-7',
      productSlug: 'athpric-tablet',
      author: 'Zubair Khan',
      city: 'Quetta, Balochistan',
      rating: 4,
      date: '18 Jul 2026',
      title: 'Effective medication',
      comment:
        'Helped cure bacterial infection promptly. Good customer service from INMAAS.',
      verified: true,
            helpfulCount: 5,
    },
    {
      id: 'athp-8',
      productSlug: 'athpric-tablet',
      author: 'Taimoor Alam',
      city: 'Islamabad',
      rating: 5,
      date: '10 Jul 2026',
      title: 'Prompt delivery and authentic medicine',
      comment:
        'Package was received within 48 hours. Genuine medicine manufactured under DRAP regulations.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'athp-9',
      productSlug: 'athpric-tablet',
      author: 'Naveed Raza',
      city: 'Hyderabad, Sindh',
      rating: 5,
      date: '03 Jul 2026',
      title: 'Solid packaging & reliable efficacy',
      comment:
        'Fast acting ciprofloxacin tablets. High standard of quality assurance.',
      verified: true,
            helpfulCount: 6,
    },
    {
      id: 'athp-10',
      productSlug: 'athpric-tablet',
      author: 'Ali Hamza',
      city: 'Gujranwala, Punjab',
      rating: 5,
      date: '25 Jun 2026',
      title: 'Professional service & top quality',
      comment:
        'Got genuine products delivered to my address. Fully satisfied with INMAAS.',
      verified: true,
            helpfulCount: 9,
    },
  ],

  // 8. Evemark Capsule (Evening Primrose Oil 500 mg)
  'evemark-capsule': [
    {
      id: 'eve-1',
      productSlug: 'evemark-capsule',
      author: 'Dr. Shehla Mansoor',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '28 Aug 2026',
      title: 'High-purity GLA rich Evening Primrose Oil for hormonal health',
      comment:
        'Evemark softgels deliver 500mg cold-pressed Evening Primrose Oil rich in Gamma-Linolenic Acid (GLA). I regularly recommend it for patients suffering from premenstrual breast discomfort (mastalgia), hormonal acne, and supporting female reproductive wellness.',
      verified: true,
      userRole: 'Consultant Gynecologist',
      helpfulCount: 38,
    },
    {
      id: 'eve-2',
      productSlug: 'evemark-capsule',
      author: 'Aiman Jahangir',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '23 Aug 2026',
      title: 'Cleared hormonal acne & improved skin hydration!',
      comment:
        'I struggled with stubborn hormonal chin breakouts for over a year. After taking Evemark softgels daily for 2 months, my breakouts have completely subsided and my skin has a healthy, radiant glow. Absolutely love this product!',
      verified: true,
            helpfulCount: 29,
    },
    {
      id: 'eve-3',
      productSlug: 'evemark-capsule',
      author: 'Rabia Sohail',
      city: 'Islamabad',
      rating: 5,
      date: '18 Aug 2026',
      title: 'Remarkable relief from severe PMS symptoms',
      comment:
        'Mood swings, cramps and bloating before periods were exhausting. Evemark helped balance everything out gently and naturally. Softgels are easy to swallow with no fishy/oily aftertaste.',
      verified: true,
            helpfulCount: 22,
    },
    {
      id: 'eve-4',
      productSlug: 'evemark-capsule',
      author: 'Dr. Mahnoor Bilal',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '11 Aug 2026',
      title: 'Supportive therapy for fertility & cervical mucus',
      comment:
        'GLA supplementation supports anti-inflammatory prostaglandin balance and reproductive health. Evemark is of exemplary pharmaceutical standard.',
      verified: true,
      userRole: 'Obstetrics & Fertility Specialist',
      helpfulCount: 25,
    },
    {
      id: 'eve-5',
      productSlug: 'evemark-capsule',
      author: 'Farida Bano',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '05 Aug 2026',
      title: 'Softgels are fresh and hermetically sealed',
      comment:
        'Capsules are crystal clear and perfectly sealed. Noticeable difference in dry skin and brittle nails after 4 weeks of use.',
      verified: true,
            helpfulCount: 14,
    },
    {
      id: 'eve-6',
      productSlug: 'evemark-capsule',
      author: 'Saira Waqar',
      city: 'Multan, Punjab',
      rating: 5,
      date: '29 Jul 2026',
      title: 'Free delivery and genuine medicine',
      comment:
        'Ordered 3 packs to get Free Shipping. Parcel arrived in 2 days in Multan with safe cooling wrap.',
      verified: true,
            helpfulCount: 12,
    },
    {
      id: 'eve-7',
      productSlug: 'evemark-capsule',
      author: 'Bushra Naveed',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '22 Jul 2026',
      title: 'Excellent natural supplement',
      comment:
        'Great for overall women’s wellness. High quality cold-pressed oil.',
      verified: true,
            helpfulCount: 10,
    },
    {
      id: 'eve-8',
      productSlug: 'evemark-capsule',
      author: 'Kalsoom Bibi',
      city: 'Hyderabad, Sindh',
      rating: 4,
      date: '14 Jul 2026',
      title: 'Very good results for hair & skin',
      comment:
        'Helped reduce hair fall and improved skin texture. Very happy with the purchase.',
      verified: true,
            helpfulCount: 9,
    },
    {
      id: 'eve-9',
      productSlug: 'evemark-capsule',
      author: 'Naila Haroon',
      city: 'Quetta, Balochistan',
      rating: 5,
      date: '06 Jul 2026',
      title: 'High quality evening primrose oil in Pakistan',
      comment:
        'Hard to find genuine, unadulterated evening primrose oil locally. INMAAS Evemark is top notch.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'eve-10',
      productSlug: 'evemark-capsule',
      author: 'Zainab Tariq',
      city: 'Sialkot, Punjab',
      rating: 5,
      date: '27 Jun 2026',
      title: '5 stars for quality & prompt customer care',
      comment:
        'Received original product directly from official company channel. Highly recommended.',
      verified: true,
            helpfulCount: 13,
    },
  ],

  // 9. Fenglar Injection (Ceftriaxone I.M.)
  'fenglar-injection': [
    {
      id: 'feng-1',
      productSlug: 'fenglar-injection',
      author: 'Dr. Tariq Mehmood Bajwa',
      city: 'Lahore, Punjab',
      rating: 5,
      date: '28 Aug 2026',
      title: 'High-purity lyophilised Ceftriaxone for hospital & clinical management',
      comment:
        'Fenglar delivers potent third-generation cephalosporin antimicrobial coverage. Dissolution is instantaneous with zero particulate residue, ensuring sterile and safe intramuscular administration in bacterial infections and surgical prophylaxis.',
      verified: true,
      userRole: 'Consultant Surgeon',
      helpfulCount: 30,
    },
    {
      id: 'feng-2',
      productSlug: 'fenglar-injection',
      author: 'Dr. Waqas Ur Rehman',
      city: 'Karachi, Sindh',
      rating: 5,
      date: '22 Aug 2026',
      title: 'Reliable antibiotic efficacy in severe respiratory & soft tissue infections',
      comment:
        'Fenglar intramuscular injection exhibits rapid systemic absorption and patient recovery in acute bacterial infections. Manufactured in strict sterile cleanroom environments.',
      verified: true,
      userRole: 'Hospital Physician',
      helpfulCount: 23,
    },
    {
      id: 'feng-3',
      productSlug: 'fenglar-injection',
      author: 'Rashid Minhas',
      city: 'Rawalpindi, Punjab',
      rating: 5,
      date: '17 Aug 2026',
      title: 'Prescribed by clinic and worked immediately',
      comment:
        'Administered by our family doctor for severe chest bacterial infection. Fever broke on the first evening and recovery was very fast. Sealed ampoule with solvent included.',
      verified: true,
            helpfulCount: 16,
    },
    {
      id: 'feng-4',
      productSlug: 'fenglar-injection',
      author: 'Dr. Amina Sarwar',
      city: 'Multan, Punjab',
      rating: 5,
      date: '10 Aug 2026',
      title: 'Sterile formulation meeting rigorous quality assays',
      comment:
        'Consistently pure potency with zero pyrogenic reactions. Excellent hospital product.',
      verified: true,
      userRole: 'Clinical Pharmacist',
      helpfulCount: 19,
    },
    {
      id: 'feng-5',
      productSlug: 'fenglar-injection',
      author: 'Farhan Qadir',
      city: 'Peshawar, KPK',
      rating: 5,
      date: '04 Aug 2026',
      title: 'Strict cold-chain packaging and fast delivery',
      comment:
        'Received in a rigid protective box. Original DRAP registered injectable medicine.',
      verified: true,
            helpfulCount: 11,
    },
    {
      id: 'feng-6',
      productSlug: 'fenglar-injection',
      author: 'Dr. Bilal Yousuf',
      city: 'Islamabad',
      rating: 5,
      date: '28 Jul 2026',
      title: 'Superior clinical recovery rate',
      comment:
        'Trusted third-generation cephalosporin for acute outpatient and daycare therapy.',
      verified: true,
      userRole: 'Emergency Medicine Specialist',
      helpfulCount: 14,
    },
    {
      id: 'feng-7',
      productSlug: 'fenglar-injection',
      author: 'Khurram Jamil',
      city: 'Faisalabad, Punjab',
      rating: 5,
      date: '20 Jul 2026',
      title: 'Genuine injectable medicine',
      comment:
        'Delivered promptly with clear batch number and seal intact.',
      verified: true,
            helpfulCount: 8,
    },
    {
      id: 'feng-8',
      productSlug: 'fenglar-injection',
      author: 'Dr. Shariq Alvi',
      city: 'Hyderabad, Sindh',
      rating: 5,
      date: '13 Jul 2026',
      title: 'Consistent antibacterial potency',
      comment:
        'Meets international pharmacopoeial standards for ceftriaxone intramuscular injections.',
      verified: true,
      userRole: 'General Practitioner',
      helpfulCount: 10,
    },
    {
      id: 'feng-9',
      productSlug: 'fenglar-injection',
      author: 'Naveed Asghar',
      city: 'Gujranwala, Punjab',
      rating: 4,
      date: '05 Jul 2026',
      title: 'Fast acting medicine',
      comment:
        'Brought fever down quickly when administered by doctor. High quality.',
      verified: true,
            helpfulCount: 7,
    },
    {
      id: 'feng-10',
      productSlug: 'fenglar-injection',
      author: 'Shahid Mehmood',
      city: 'Quetta, Balochistan',
      rating: 5,
      date: '27 Jun 2026',
      title: 'Safe packaging and authentic product',
      comment:
        'INMAAS provides high-grade pharmaceutical injectables. Very satisfied.',
      verified: true,
            helpfulCount: 9,
    },
  ],
};

/** Get reviews for a product */
export function getProductReviews(productSlug: string): ProductReview[] {
  return PRODUCT_REVIEWS[productSlug] || [];
}

/** Compute aggregate rating score, distribution and total count */
export function calculateReviewStats(reviews: ProductReview[]) {
  if (!reviews || reviews.length === 0) {
    return {
      average: 5.0,
      totalCount: 0,
      breakdown: { 5: 100, 4: 0, 3: 0, 2: 0, 1: 0 },
      counts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    };
  }

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sum = 0;

  reviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5;
    counts[star] = (counts[star] || 0) + 1;
    sum += r.rating;
  });

  const total = reviews.length;
  const average = Number((sum / total).toFixed(1));

  const breakdown = {
    5: Math.round((counts[5] / total) * 100),
    4: Math.round((counts[4] / total) * 100),
    3: Math.round((counts[3] / total) * 100),
    2: Math.round((counts[2] / total) * 100),
    1: Math.round((counts[1] / total) * 100),
  };

  return { average, totalCount: total, breakdown, counts };
}

import type { Metadata } from 'next';
import { Poppins, Inter, Montserrat, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { constructMetadata } from '@/lib/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  variable: '--font-urdu',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'INMAAS Health Care',
    description:
      'Premium syrups, tablets, capsules and IV solutions by INMAAS Health Care — approved by DRAP to ensure the highest quality standards.',
    url: 'https://inmaas-nexus-web.lovable.app',
    logo: 'https://inmaas-nexus-web.lovable.app/assets/inmaas-logo-mark-C8myYyGw.png',
  };

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${poppins.variable} ${inter.variable} ${montserrat.variable} ${notoNastaliqUrdu.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-ink antialiased flex flex-col selection:bg-brand-light/20 selection:text-brand-deep">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

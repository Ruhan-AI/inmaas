import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/data/constants';

export const DEFAULT_OG_IMAGE =
  'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f198b6-6382-4350-90a7-00308a05d0f2/id-preview-49c9284c--75be3a20-8eae-4c20-ad69-8b84979489e7.lovable.app-1783675204503.png';

export function constructMetadata({
  title = `${SITE_NAME} — DRAP Approved Pharmaceuticals`,
  description = 'Premium syrups, tablets, capsules and IV solutions by INMAAS Health Care — approved by DRAP to ensure the highest quality standards.',
  canonical,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonical ? `${SITE_URL}${canonical}` : SITE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

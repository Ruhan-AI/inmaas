import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/data/constants';

/** Self-hosted social card. Resolved against metadataBase, so it stays correct
 *  whichever domain the site is deployed to. */
export const DEFAULT_OG_IMAGE = '/assets/og-inmaas.jpg';

export function constructMetadata({
  title = `${SITE_NAME} — DRAP Approved Pharmaceuticals`,
  description = 'Premium syrups, tablets, capsules and injections by INMAAS Health Care — approved by DRAP to ensure the highest quality standards.',
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

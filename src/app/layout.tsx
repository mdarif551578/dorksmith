import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { TooltipProvider } from '@/components/ui/tooltip';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dorksmith.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dorksmith: Advanced Search Query Builder',
    template: '%s | Dorksmith',
  },
  description: 'Visually construct complex Google Dork queries, discover operators, and leverage templates to master advanced search techniques responsibly.',
  keywords: ['Google Dork', 'Advanced Search', 'SEO', 'Security Research', 'Query Builder', 'Dorking'],
  openGraph: {
    title: 'Dorksmith: Advanced Search Query Builder',
    description: 'Visually construct complex Google Dork queries to master advanced search.',
    url: siteUrl,
    siteName: 'Dorksmith',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dorksmith Logo and tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dorksmith: Advanced Search Query Builder',
    description: 'Visually construct complex Google Dork queries to master advanced search.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteUrl}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dorksmith',
    url: siteUrl,
  };

  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background")}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}

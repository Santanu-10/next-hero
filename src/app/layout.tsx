import type { Metadata } from "next";
import "./globals.css";

// SEO-optimized metadata
export const metadata: Metadata = {
  title: {
    default:
      "Vaidya Barta - Smart Clinic Management Software | Healthcare Solutions",
    template: "%s | Vaidya Barta",
  },
  description:
    "Transform your healthcare practice with Vaidya Barta - Advanced clinic management software featuring patient booking, multilingual prescriptions, doctor scheduling, and seamless healthcare operations for modern clinics in India.",
  keywords: [
    "clinic management software",
    "healthcare management system",
    "patient booking system",
    "doctor appointment software",
    "medical practice management",
    "healthcare technology",
    "clinic automation",
    "patient management",
    "medical software India",
    "healthcare solutions",
    "telemedicine platform",
    "electronic health records",
    "prescription management",
    "clinic workflow automation",
  ],
  authors: [{ name: "Vaidya Barta Team" }],
  creator: "DataLuminous",
  publisher: "Vaidya Barta",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vaidyabarta.com",
    siteName: "Vaidya Barta",
    title: "Vaidya Barta - Smart Clinic Management Software",
    description:
      "Transform your healthcare practice with advanced clinic management software. Features patient booking, multilingual prescriptions, and seamless healthcare operations.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vaidya Barta - Smart Clinic Management Software",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@vaidyabarta",
    creator: "@vaidyabarta",
    title: "Vaidya Barta - Smart Clinic Management Software",
    description:
      "Transform your healthcare practice with advanced clinic management software featuring patient booking and multilingual prescriptions.",
    images: ["/assets/images/twitter-image.jpg"],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (Replace with your actual codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Category and classification
  category: "Healthcare Technology",

  // Canonical URL
  alternates: {
    canonical: "https://vaidyabarta.com",
  },

  // App-specific
  applicationName: "Vaidya Barta",

  // Format detection
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },

  // Other
  referrer: "origin-when-cross-origin",

  // Manifest
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#615EFC" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Stylesheets with proper loading strategy */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#615EFC" />
        <meta name="msapplication-TileColor" content="#615EFC" />

        {/* Additional meta tags for better SEO */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vaidya Barta" />

        {/* Geographic meta tags */}
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />
        <meta name="geo.position" content="22.5726;88.3639" />
        <meta name="ICBM" content="22.5726, 88.3639" />

        {/* Business information */}
        <meta name="contact" content="help@vaidyabarta.com" />
        <meta name="reply-to" content="help@vaidyabarta.com" />
        <meta name="owner" content="Vaidya Barta" />
        <meta name="url" content="https://vaidyabarta.com" />
        <meta name="identifier-URL" content="https://vaidyabarta.com" />
        <meta name="directory" content="submission" />
        <meta
          name="category"
          content="Healthcare, Medical Software, Clinic Management"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />

        {/* Cache control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="skip-to-main sr-only sr-only-focusable"
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/assets/images/dr_logo_1.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/assets/images/doctorbanner.avif"
          as="image"
          type="image/avif"
        />
      </body>
    </html>
  );
}

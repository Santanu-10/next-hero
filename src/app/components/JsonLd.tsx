import Script from 'next/script';

export const JsonLd: React.FC = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vaidya Barta",
    "alternateName": "VaidyaBarta",
    "url": "https://vaidyabarta.com",
    "logo": "https://vaidyabarta.com/assets/images/dr_logo_1.png",
    "description": "Advanced clinic management software featuring patient booking, multilingual prescriptions, doctor scheduling, and seamless healthcare operations for modern clinics in India.",
    "email": "help@vaidyabarta.com",
    "telephone": "+91-9831036295",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector-V Salt Lake City",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700091",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "foundingDate": "2024",
    "founder": {
      "@type": "Organization",
      "name": "DataLuminous"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vaidyabarta",
      "https://twitter.com/vaidyabarta",
      "https://www.facebook.com/vaidyabarta"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9831036295",
      "contactType": "customer service",
      "email": "help@vaidyabarta.com",
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Healthcare Technology"
  };

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vaidya Barta",
    "description": "Smart clinic management software with patient booking, multilingual prescriptions, and healthcare workflow automation.",
    "url": "https://vaidyabarta.com",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web-based, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free trial available"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vaidya Barta"
    },
    "featureList": [
      "Patient Booking System",
      "Multilingual Prescriptions",
      "Doctor Schedule Management",
      "Voice-based Prescription",
      "Chat with Patients",
      "Prescription Templates",
      "Patient Registration",
      "Healthcare Workflow Automation"
    ],
    "screenshot": "https://vaidyabarta.com/assets/images/doctorbanner.avif",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  };

  // Medical Business Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Vaidya Barta",
    "description": "Healthcare technology company providing clinic management software solutions for medical practices across India.",
    "url": "https://vaidyabarta.com",
    "image": "https://vaidyabarta.com/assets/images/dr_logo_1.png",
    "telephone": "+91-9831036295",
    "email": "help@vaidyabarta.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector-V Salt Lake City",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700091",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Fr 10:00-18:00",
    "priceRange": "Free trial available",
    "paymentAccepted": "Credit Card, Debit Card, UPI, Net Banking",
    "currenciesAccepted": "INR"
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Vaidya Barta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vaidya Barta is an advanced clinic management software designed to streamline patient bookings, doctor schedules, and prescription generation, making healthcare administration efficient and hassle-free."
        }
      },
      {
        "@type": "Question",
        "name": "Who should be using Vaidya Barta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doctors, clinic administrators, and healthcare facilities can benefit from using Vaidya Barta to manage patient records, appointments, and prescriptions seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "How should I use Vaidya Barta for my clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply register your clinic on our platform, configure your settings, and start managing patient bookings, doctor schedules, and prescriptions with ease."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to set up Vaidya Barta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vaidya Barta is designed for quick deployment. Most clinics can set up their account and start using the system within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Vaidya Barta on my Laptop, Mobile, Tablet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Vaidya Barta is a cloud-based platform accessible from laptops, mobiles, and tablets, allowing you to manage your clinic from anywhere."
        }
      }
    ]
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vaidya Barta",
    "url": "https://vaidyabarta.com",
    "description": "Smart clinic management software for healthcare professionals",
    "publisher": {
      "@type": "Organization",
      "name": "Vaidya Barta"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vaidyabarta.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vaidyabarta.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": "https://vaidyabarta.com#all-features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Doctors",
        "item": "https://vaidyabarta.com#doctors"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "FAQ",
        "item": "https://vaidyabarta.com#faq"
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clinic Management Software",
    "description": "Comprehensive clinic management solution with patient booking, prescriptions, and healthcare workflow automation",
    "provider": {
      "@type": "Organization",
      "name": "Vaidya Barta"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals, Doctors, Clinic Administrators"
    },
    "serviceType": "Healthcare Technology",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vaidya Barta Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patient Booking System"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multilingual Prescriptions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doctor Schedule Management"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <Script
        id="medical-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
};
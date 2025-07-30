"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [currentDate, setCurrentDate] = useState<string>("");

  // Remove Next.js dev tools in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const removeDevTools = () => {
        const selectors = [
          "[data-nextjs-toast-wrapper]",
          "[data-next-badge-root]",
          "[data-nextjs-dev-tools-button]",
          'button[aria-label*="Next.js"]',
          'div[style*="--size: 36px"]',
        ];

        selectors.forEach((selector) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => element.remove());
        });
      };

      removeDevTools();
      const interval = setInterval(removeDevTools, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  // Set current date on client side
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Rubik', sans-serif",
        lineHeight: 1.7,
        color: "#2d3748",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <header
        style={{
          marginBottom: "50px",
          borderBottom: "2px solid #e2e8f0",
          paddingBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "15px",
            letterSpacing: "-0.02em",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#718096", fontWeight: 500 }}>
          Last updated: {currentDate}
        </p>
      </header>

      <main>
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Introduction
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            This Privacy Policy describes how{" "}
            <strong>YEM SOFTWARE INNOVATIONS PRIVATE LIMITED</strong> and its
            affiliates (collectively "YEM SOFTWARE INNOVATIONS PRIVATE LIMITED,
            we, our, us") collect, use, share, protect or otherwise process your
            information/personal data through our website
            <span style={{ color: "#4299e1", fontWeight: 600 }}>
              {" "}
              https://vaidyabarta.com
            </span>{" "}
            (hereinafter referred to as Platform). Please note that you may be
            able to browse certain sections of the Platform without registering
            with us.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We do not offer any product/service under this Platform outside
            India and your personal data will primarily be stored and processed
            in India. By visiting this Platform, providing your information or
            availing any product/service offered on the Platform, you expressly
            agree to be bound by the terms and conditions of this Privacy
            Policy, the Terms of Use and the applicable service/product terms
            and conditions, and agree to be governed by the laws of India
            including but not limited to the laws applicable to data protection
            and privacy. If you do not agree please do not use or access our
            Platform.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Collection
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We collect your personal data when you use our Platform, services or
            otherwise interact with us during the course of our relationship and
            related information provided from time to time. Some of the
            information that we may collect includes but is not limited to
            personal data/information provided to us during sign-up/registering
            or using our Platform such as name, date of birth, address,
            telephone/mobile number, email ID and/or any such information shared
            as proof of identity or address.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            Some of the sensitive personal data may be collected with your
            consent, such as your bank account or credit or debit card or other
            payment instrument information or biometric information such as your
            facial features or physiological information (in order to enable use
            of certain features when opted for, available on the Platform) etc
            all of the above being in accordance with applicable law(s).
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            You always have the option to not provide information, by choosing
            not to use a particular service or feature on the Platform. We may
            track your behaviour, preferences, and other information that you
            choose to provide on our Platform. This information is compiled and
            analysed on an aggregated basis. We will also collect your
            information related to your transactions on Platform and such
            third-party business partner platforms.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
              backgroundColor: "#fef5e7",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #f6ad55",
            }}
          >
            <strong>Important Security Notice:</strong> If you receive an email,
            a call from a person/association claiming to be YEM SOFTWARE
            INNOVATIONS PRIVATE LIMITED seeking any personal data like
            debit/credit card PIN, net-banking or mobile banking password, we
            request you to never provide such information. If you have already
            revealed such information, report it immediately to an appropriate
            law enforcement agency.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Usage
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We use personal data to provide the services you request. To the
            extent we use your personal data to market to you, we will provide
            you the ability to opt-out of such uses. We use your personal data
            to assist sellers and business partners in handling and fulfilling
            orders; enhancing customer experience; to resolve disputes;
            troubleshoot problems; inform you about online and offline offers,
            products, services, and updates; customise your experience; detect
            and protect us against error, fraud and other criminal activity;
            enforce our terms and conditions; conduct marketing research,
            analysis and surveys; and as otherwise described to you at the time
            of collection of information.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            You understand that your access to these products/services may be
            affected in the event permission is not provided to us.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Sharing
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We may share your personal data internally within our group
            entities, our other corporate entities, and affiliates to provide
            you access to the services and products offered by them. These
            entities and affiliates may market to you as a result of such
            sharing unless you explicitly opt-out.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We may disclose personal data to third parties such as sellers,
            business partners, third party service providers including logistics
            partners, prepaid payment instrument issuers, third-party reward
            programs and other payment opted by you. These disclosure may be
            required for us to provide you access to our services and products
            offered to you, to comply with our legal obligations, to enforce our
            user agreement, to facilitate our marketing and advertising
            activities, to prevent, detect, mitigate, and investigate fraudulent
            or illegal activities related to our services.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We may disclose personal and sensitive personal data to government
            agencies or other authorised law enforcement agencies if required to
            do so by law or in the good faith belief that such disclosure is
            reasonably necessary to respond to subpoenas, court orders, or other
            legal process. We may disclose personal data to law enforcement
            offices, third party rights owners, or others in the good faith
            belief that such disclosure is reasonably necessary to: enforce our
            Terms of Use or Privacy Policy; respond to claims that an
            advertisement, posting or other content violates the rights of a
            third party; or protect the rights, property or personal safety of
            our users or the general public.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Security Precautions
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            To protect your personal data from unauthorised access or
            disclosure, loss or misuse we adopt reasonable security practices
            and procedures. Once your information is in our possession or
            whenever you access your account information, we adhere to our
            security guidelines to protect it against unauthorised access and
            offer the use of a secure server.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            However, the transmission of information is not completely secure
            for reasons beyond our control. By using the Platform, the users
            accept the security implications of data transmission over the
            internet and the World Wide Web which cannot always be guaranteed as
            completely secure, and therefore, there would always remain certain
            inherent risks regarding use of the Platform. Users are responsible
            for ensuring the protection of login and password records for their
            account.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Data Deletion and Retention
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            You have an option to delete your account by visiting your profile
            and settings on our Platform, this action would result in you losing
            all information related to your account. You may also write to us at
            the contact information provided below to assist you with these
            requests. We may in event of any pending grievance, claims, pending
            shipments or any other services we may refuse or delay deletion of
            the account.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            We retain your personal data information for a period no longer than
            is required for the purpose for which it was collected or as
            required under any applicable law. However, we may retain data
            related to you if we believe it may be necessary to prevent fraud or
            future abuse or for other legitimate purposes. We may continue to
            retain your data in anonymised form for analytical and research
            purposes.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Your Rights
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            You may access, rectify, and update your personal data directly
            through the functionalities provided on the Platform.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Consent
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            By visiting our Platform or by providing your information, you
            consent to the collection, use, storage, disclosure and otherwise
            processing of your information on the Platform in accordance with
            this Privacy Policy. If you disclose to us any personal data
            relating to other people, you represent that you have the authority
            to do so and permit us to use the information in accordance with
            this Privacy Policy.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            You, while providing your personal data over the Platform or any
            partner platforms or establishments, consent to us (including our
            other corporate entities, affiliates, lending partners, technology
            partners, marketing channels, business partners and other third
            parties) to contact you through SMS, instant messaging apps, call
            and/or e-mail for the purposes specified in this Privacy Policy. You
            have an option to withdraw your consent that you have already
            provided by writing to the Grievance Officer at the contact
            information provided below. Please mention "Withdrawal of consent
            for processing personal data" in your subject line of your
            communication.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Changes to this Privacy Policy
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            Please check our Privacy Policy periodically for changes. We may
            update this Privacy Policy to reflect changes to our information
            practices. We may alert/notify you about the significant changes to
            the Privacy Policy, in the manner as may be required under
            applicable laws.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#2b6cb0",
              fontWeight: 700,
              borderLeft: "4px solid #4299e1",
              paddingLeft: "15px",
            }}
          >
            Grievance Officer
          </h2>
          {/* <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p> */}
          <div
            style={{
              backgroundColor: "#f7fafc",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <address style={{ fontStyle: "normal", fontSize: "1.1rem" }}>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Name of the Officer:
                </strong>
                <span> Ashik ur Rahman</span>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Designation:
                </strong>
                <span>Manager</span>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Phone Number:
                </strong>
                <Link
                  href="tel:+919831036295"
                  style={{
                    color: "#4299e1",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +91 9831689316
                </Link>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Hours:
                </strong>
                <span>Monday - Friday (9:00 - 18:00)</span>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Company Name:
                </strong>
                <span>YEM SOFTWARE INNOVATIONS PRIVATE LIMITED</span>
              </p>
              <p style={{ display: "flex", alignItems: "flex-start" }}>
                <strong style={{ minWidth: "60px", color: "#2d3748" }}>
                  Address:
                </strong>
                <span>
                  25, FL - 2B, FLR - 2ND, Kolkata RIFLE RANGE ROAD, Kolkata,
                  India
                </span>
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer
        style={{
          marginTop: "60px",
          paddingTop: "30px",
          borderTop: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <button
          onClick={scrollToTop}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            padding: "12px 30px",
            borderRadius: "25px",
            cursor: "pointer",
            marginBottom: "25px",
            fontFamily: "'Rubik', sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Back to Top
        </button>
        <p style={{ color: "#718096", fontSize: "1rem", fontWeight: 500 }}>
          © {new Date().getFullYear()} YEM SOFTWARE INNOVATIONS PRIVATE LIMITED.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

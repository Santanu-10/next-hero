"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function RefundCancellation() {
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
          Refund & Cancellation Policy
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
            Policy Overview
          </h2>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            This refund and cancellation policy outlines how you can cancel or
            seek a refund for a product/service that you have purchased through
            the Platform. Under this policy:
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
            Refund and Cancellation Terms
          </h2>
          <ol
            style={{
              marginLeft: "25px",
              marginBottom: "20px",
              fontSize: "1.1rem",
            }}
          >
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              Cancellations will only be considered if the request is made{" "}
              <strong style={{ color: "#e53e3e" }}>10 days</strong> of placing
              the order. However, cancellation requests may not be entertained
              if the orders have been communicated to such sellers/merchant(s)
              listed on the Platform and they have initiated the process of
              shipping them, or the product is out for delivery. In such an
              event, you may choose to reject the product at the doorstep.
            </li>
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              <strong>YEM SOFTWARE INNOVATIONS PRIVATE LIMITED</strong> does not
              accept cancellation requests for perishable items like flowers,
              eatables, etc. However, the refund/replacement can be made if the
              user establishes that the quality of the product delivered is not
              good.
            </li>
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              In case of receipt of damaged or defective items, please report to
              our customer service team. The request would be entertained once
              the seller/merchant listed on the Platform, has checked and
              determined the same at its own end. This should be reported within{" "}
              <strong style={{ color: "#e53e3e" }}>10 days</strong> of receipt
              of products.
            </li>
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              In case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our customer service within{" "}
              <strong style={{ color: "#e53e3e" }}>10 days</strong> of receiving
              the product. The customer service team after looking into your
              complaint will take an appropriate decision.
            </li>
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              In case of complaints regarding the products that come with a
              warranty from the manufacturers, please refer the issue to them.
            </li>
            <li style={{ marginBottom: "20px", textAlign: "justify" }}>
              In case of any refunds approved by{" "}
              <strong>YEM SOFTWARE INNOVATIONS PRIVATE LIMITED</strong>, it will
              take <strong style={{ color: "#38a169" }}>15 days</strong> for the
              refund to be processed to you.
            </li>
          </ol>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <div
            style={{
              backgroundColor: "#ebf8ff",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #90cdf4",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "15px",
                color: "#2b6cb0",
                fontWeight: 700,
              }}
            >
              Important Notes for Clinic Management Services
            </h3>
            <p
              style={{
                marginBottom: "15px",
                fontSize: "1.1rem",
                textAlign: "justify",
              }}
            >
              Since we operate on a pay-per-prescription model for our clinic
              management services, refunds are generally not provided once a
              prescription has been generated and the service has been rendered.
              However, each case will be reviewed individually based on the
              circumstances.
            </p>
            <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
              For any billing disputes or service-related issues, please contact
              us within 7 days of the transaction for prompt resolution.
            </p>
          </div>
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
            Contact Us
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
            For any questions regarding refunds or cancellations, please contact
            us at:
          </p>
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
                  Email:
                </strong>
                <Link
                  href="mailto:help@vaidyabarta.com"
                  style={{
                    color: "#4299e1",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  help@vaidyabarta.com
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
                  Phone:
                </strong>
                <Link
                  href="tel:+919831036295"
                  style={{
                    color: "#4299e1",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +91 9831036295
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

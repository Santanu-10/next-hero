"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function TermsConditions() {
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
          Terms & Conditions
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#718096", fontWeight: 500 }}>
          Last updated: {currentDate}
        </p>
      </header>

      <main>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "20px", 
            color: "#2b6cb0", 
            fontWeight: 700,
            borderLeft: "4px solid #4299e1",
            paddingLeft: "15px"
          }}>
            Electronic Record
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            This document is an electronic record in terms of Information Technology Act, 2000 and rules 
            there under as applicable and the amended provisions pertaining to electronic records in various 
            statutes as amended by the Information Technology Act, 2000. This electronic record is generated 
            by a computer system and does not require any physical or digital signatures.
          </p>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            This document is published in accordance with the provisions of Rule 3 (1) of the Information 
            Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and 
            regulations, privacy policy and Terms of Use for access or usage of domain name 
            <span style={{ color: "#4299e1", fontWeight: 600 }}> https://vaidyabarta.com</span> ('Website'), including the related mobile site and mobile application 
            (hereinafter referred to as 'Platform').
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "20px", 
            color: "#2b6cb0", 
            fontWeight: 700,
            borderLeft: "4px solid #4299e1",
            paddingLeft: "15px"
          }}>
            Platform Owner
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            The Platform is owned by <strong>YEM SOFTWARE INNOVATIONS PRIVATE LIMITED</strong>, a 
            company incorporated under the Companies Act, 1956 with its registered office at <strong>25, FL - 2B, 
            FLR - 2ND, Kolkata RIFLE RANGE ROAD, Kolkata, India</strong> (hereinafter referred to as 
            'Platform Owner', 'we', 'us', 'our').
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "20px", 
            color: "#2b6cb0", 
            fontWeight: 700,
            borderLeft: "4px solid #4299e1",
            paddingLeft: "15px"
          }}>
            Agreement to Terms
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            Your use of the Platform and services and tools are governed by the following terms and 
            conditions ("Terms of Use") as applicable to the Platform including the applicable policies which 
            are incorporated herein by way of reference. If You transact on the Platform, You shall be subject 
            to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, 
            You shall be contracting with the Platform Owner and these terms and conditions including the 
            policies constitute Your binding obligations, with Platform Owner.
          </p>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            These Terms of Use relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, 'Services'). 
            Any terms and conditions proposed by You which are in addition to or which conflict with these 
            Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. 
            These Terms of Use can be modified at any time without assigning any reason. It is your 
            responsibility to periodically review these Terms of Use to stay informed of updates.
          </p>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", textAlign: "justify" }}>
            For the purpose of these Terms of Use, wherever the context so requires 'you', 'your' or 'user' shall 
            mean any natural or legal person who has agreed to become a user/buyer on the Platform.
          </p>
          <div style={{ 
            backgroundColor: "#fed7d7", 
            padding: "20px", 
            borderRadius: "8px", 
            border: "2px solid #fc8181",
            marginBottom: "20px"
          }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, textAlign: "center", margin: 0, color: "#9b2c2c" }}>
              <strong>ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR 
              AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, 
              SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.</strong>
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "20px", 
            color: "#2b6cb0", 
            fontWeight: 700,
            borderLeft: "4px solid #4299e1",
            paddingLeft: "15px"
          }}>
            Terms of Use
          </h2>
          <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            The use of Platform and/or availing of our Services is subject to the following Terms of Use:
          </p>
          <ol style={{ marginLeft: "25px", marginBottom: "20px", fontSize: "1.1rem" }}>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              To access and use the Services, you agree to provide true, accurate and complete information 
              to us during and after registration, and you shall be responsible for all acts done through the 
              use of your registered account on the Platform.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, 
              timeliness, performance, completeness or suitability of the information and materials offered 
              on this website or through the Services, for any specific purpose. You acknowledge that such 
              information and materials may contain inaccuracies or errors and we expressly exclude 
              liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              Your use of our Services and the Platform is solely and entirely at your own risk and 
              discretion for which we shall not be liable to you in any manner. You are required to 
              independently assess and ensure that the Services meet your requirements.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              The contents of the Platform and the Services are proprietary to us and are licensed to us. 
              You will not have any authority to claim any intellectual property rights, title, or interest in 
              its contents. The contents includes and is not limited to the design, layout, look and graphics.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              You acknowledge that unauthorized use of the Platform and/or the Services may lead to 
              action against you as per these Terms of Use and/or applicable laws.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              You agree to pay us the charges associated with availing the Services.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal or 
              forbidden by these Terms, or Indian or local laws that might apply to you.
            </li>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              You agree and acknowledge that website and the Services may contain links to other third 
              party websites. On accessing these links, you will be governed by the terms of use, privacy 
              policy and such other policies of such third party websites. These links are provided for your 
              convenience for provide further information.
            </li>
          </ol>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "20px", 
            color: "#2b6cb0", 
            fontWeight: 700,
            borderLeft: "4px solid #4299e1",
            paddingLeft: "15px"
          }}>
            Legal Obligations
          </h2>
          <ol start={9} style={{ marginLeft: "25px", marginBottom: "20px", fontSize: "1.1rem" }}>
            <li style={{ marginBottom: "15px", textAlign: "justify" }}>
              You understand that upon initiating a transaction for availing the Services you are entering
into a legally binding and enforceable contract with the Platform Owner for the Services.
</li>
<li style={{ marginBottom: "15px", textAlign: "justify" }}>
You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as
applicable) and their respective officers, directors, agents, and employees, from any claim or
demand, or actions including reasonable attorney's fees, made by any third party or penalty
imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other
Policies, or Your violation of any law, rules or regulations or the rights (including
infringement of intellectual property rights) of a third party.
</li>
<li style={{ marginBottom: "15px", textAlign: "justify" }}>
Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for
any failure to perform an obligation under these Terms if performance is prevented or
delayed by a force majeure event.
</li>
<li style={{ marginBottom: "15px", textAlign: "justify" }}>
These Terms and any dispute or claim relating to it, or its enforceability, shall be governed
by and construed in accordance with the laws of India.
</li>
<li style={{ marginBottom: "15px", textAlign: "justify" }}>
All disputes arising out of or in connection with these Terms shall be subject to the exclusive
jurisdiction of the courts in Kolkata and West Bengal.
</li>
<li style={{ marginBottom: "15px", textAlign: "justify" }}>
All concerns or communications relating to these Terms must be communicated to us using
the contact information provided on this website.
</li>
</ol>
</section>
<section style={{ marginBottom: "40px" }}>
      <h2 style={{ 
        fontSize: "2rem", 
        marginBottom: "20px", 
        color: "#2b6cb0", 
        fontWeight: 700,
        borderLeft: "4px solid #4299e1",
        paddingLeft: "15px"
      }}>
        Contact Information
      </h2>
      <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
        All concerns or communications relating to these Terms must be communicated to us using 
        the contact information provided on this website:
      </p>
      <div style={{ 
        backgroundColor: "#f7fafc", 
        padding: "25px", 
        borderRadius: "12px", 
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <address style={{ fontStyle: "normal", fontSize: "1.1rem" }}>
          <p style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <strong style={{ minWidth: "60px", color: "#2d3748" }}>Email:</strong>
            <Link href="mailto:help@vaidyabarta.com" style={{ color: "#4299e1", textDecoration: "none", fontWeight: 600 }}>
              help@vaidyabarta.com
            </Link>
          </p>
          <p style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <strong style={{ minWidth: "60px", color: "#2d3748" }}>Phone:</strong>
            <Link href="tel:+919831036295" style={{ color: "#4299e1", textDecoration: "none", fontWeight: 600 }}>
              +91 9831036295
            </Link>
          </p>
          <p style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <strong style={{ minWidth: "60px", color: "#2d3748" }}>Hours:</strong>
            <span>Monday - Friday (9:00 - 18:00)</span>
          </p>
          <p style={{ display: "flex", alignItems: "flex-start" }}>
            <strong style={{ minWidth: "60px", color: "#2d3748" }}>Address:</strong>
            <span>25, FL - 2B, FLR - 2ND, Kolkata RIFLE RANGE ROAD, Kolkata, India</span>
          </p>
        </address>
      </div>
    </section>
  </main>

  <footer style={{ 
    marginTop: "60px", 
    paddingTop: "30px", 
    borderTop: "2px solid #e2e8f0",
    textAlign: "center"
  }}>
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
      © {new Date().getFullYear()} YEM SOFTWARE INNOVATIONS PRIVATE LIMITED. All rights reserved.
    </p>
  </footer>
</div>
  );
}
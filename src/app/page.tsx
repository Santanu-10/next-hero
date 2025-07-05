"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { JsonLd } from "./components/JsonLd";
import React from "react";

// Types
interface ScrollState {
  isVisible: boolean;
  progress: number;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Doctor {
  image: string;
  name: string;
  specialty: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Constants
const SCROLL_THRESHOLD = 300;

// Services data
const SERVICES: Service[] = [
  {
    icon: "/assets/images/calendar.png",
    title: "Effortless Patient Booking",
    description:
      "Simplify patient appointments with our seamless booking system, ensuring minimal waiting times and maximum efficiency.",
  },
  {
    icon: "/assets/images/telemedicine.png",
    title: "Seamless Appointment",
    description:
      "Organize and manage appointments with an intuitive interface, reducing scheduling conflicts and enhancing patient satisfaction.",
  },
  {
    icon: "/assets/images/patient-record.png",
    title: "Seamless Patient Registration",
    description:
      "Fast and hassle-free patient registration, enabling clinics to maintain accurate medical records with ease.",
  },
  {
    icon: "/assets/images/appointment.png",
    title: "Doctor Schedule Optimization",
    description:
      "Efficiently manage doctors' availability, appointments, and schedules to maximize productivity and patient care.",
  },
  {
    icon: "/assets/images/health-report.png",
    title: "Voice Based Prescription",
    description:
      "Revolutionize prescription writing with advanced voice recognition, allowing doctors to dictate prescriptions hands-free.",
  },
  {
    icon: "/assets/images/translation.png",
    title: "Multilingual Prescriptions",
    description:
      "Generate prescriptions in various Indian languages, ensuring better understanding and accessibility for patients.",
  },
  {
    icon: "/assets/images/layout.png",
    title: "Smart Prescription Templates",
    description:
      "Speed up prescriptions with reusable templates. Fill once, save, and reuse anytime with just a click.",
  },
  {
    icon: "/assets/images/notification.png",
    title: "Chat with Patients in One Place",
    description:
      "Respond to patient messages directly from Vaidya Barta. No need to switch apps or check your phone.",
  },
  {
    icon: "/assets/images/upload.png",
    title: "Convert Paper Records to Appointments",
    description:
      "Easily upload handwritten patient lists—Vaidya Barta smartly converts them into digital appointments in a few clicks.",
  },
];

// Doctors data
const DOCTORS: Doctor[] = [
  {
    image: "/assets/images/doc1.avif",
    name: "Dr. Sudipta Banerjee",
    specialty: "MBBS, MD - Oncologists",
  },
  {
    image: "/assets/images/02.avif",
    name: "Dr. Arvind Mehta",
    specialty: "MBBS, MS - General Surgery",
  },
  {
    image: "/assets/images/03.avif",
    name: "Dr. Swati Deshmukh",
    specialty: "MBBS, DM - Cardiology",
  },
  {
    image: "/assets/images/04.avif",
    name: "Dr. Vikram Choudhury",
    specialty: "MBBS, DM - Nephrology",
  },
];

// FAQ data
const FAQS: FAQ[] = [
  {
    id: "collapseOne",
    question: "What is Vaidya Barta?",
    answer:
      "Vaidya Barta is an advanced clinic management software designed to streamline patient bookings, doctor schedules, and prescription generation, making healthcare administration efficient and hassle-free.",
  },
  {
    id: "collapseTwo",
    question: "Who should be using Vaidya Barta?",
    answer:
      "Doctors, clinic administrators, and healthcare facilities can benefit from using Vaidya Barta to manage patient records, appointments, and prescriptions seamlessly.",
  },
  {
    id: "collapseThree",
    question: "How should I use Vaidya Barta for my clinic?",
    answer:
      "Simply register your clinic on our platform, configure your settings, and start managing patient bookings, doctor schedules, and prescriptions with ease.",
  },
  {
    id: "collapseFour",
    question: "How long does it take to set up Vaidya Barta?",
    answer:
      "Vaidya Barta is designed for quick deployment. Most clinics can set up their account and start using the system within a few hours.",
  },
  {
    id: "collapseFive",
    question: "Can I use Vaidya Barta on my Laptop, Mobile, Tablet?",
    answer:
      "Yes! Vaidya Barta is a cloud-based platform accessible from laptops, mobiles, and tablets, allowing you to manage your clinic from anywhere. To Start with Doctors are requested to use on laptop/desktop and clinic assistants on mobile.",
  },
];

// Custom hooks
const useScrollState = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isVisible: false,
    progress: 0,
  });

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isVisible = scrollTop > SCROLL_THRESHOLD;
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;

    setScrollState({ isVisible, progress });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollState;
};

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggle, close };
};

const useFAQAccordion = () => {
  const [openFAQ, setOpenFAQ] = useState<string>(FAQS[0]?.id || '');

  const toggleFAQ = useCallback((faqId: string): void => {
    setOpenFAQ(prev => prev === faqId ? '' : faqId);
  }, []);

  return { openFAQ, toggleFAQ };
};

// Utilities
const scrollToTop = (): void => {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Components
const ScrollToTopButton: React.FC<{
  isVisible: boolean;
  progress: number;
}> = ({ isVisible, progress }) => {
  const strokeDashoffset = 125.6 - (progress / 100) * 125.6;

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        type="button"
      >
        <svg
          className="progress-circle"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle
            className="progress-circle-background"
            cx="25"
            cy="25"
            r="20"
          />
          <circle
            className="progress-circle-bar"
            cx="25"
            cy="25"
            r="20"
            style={{
              strokeDasharray: 125.6,
              strokeDashoffset,
            }}
          />
        </svg>
        <span className="arrow" aria-hidden="true">
          ▲
        </span>
      </button>
    </div>
  );
};

const MobileSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => (
  <nav
    id="side-bar"
    className={`side-bar header-two ${isOpen ? "open" : ""}`}
    aria-label="Mobile navigation menu"
    role="navigation"
  >
    <button
      className="close-icon-menu"
      onClick={onClose}
      aria-label="Close navigation menu"
      type="button"
    >
      <i className="fas fa-times" aria-hidden="true"></i>
    </button>
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li>
            <Link href="#introduction" className="main" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#all-features" className="main" onClick={onClose}>
              Features
            </Link>
          </li>
          <li>
            <Link href="#doctors" className="main" onClick={onClose}>
              Our Doctors
            </Link>
          </li>
          <li>
            <Link href="#faq" className="main" onClick={onClose}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#contact" className="main" onClick={onClose}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
);

const Header: React.FC<{
  onToggleSidebar: () => void;
}> = ({ onToggleSidebar }) => (
  <header className="header-one header--sticky sticky" role="banner">
    <div className="container-full-header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-wrapper-1">
            <div className="logo-area-start">
              <Link
                href="/"
                className="logo under-line-btn"
                aria-label="Vaidya Barta - Home"
              >
                <Image
                  src="/assets/images/dr_logo_1.png"
                  alt="Vaidya Barta - Clinic Management Software Logo"
                  className="desktop-logo"
                  width={110}
                  height={60}
                  priority
                />
                <Image
                  src="/assets/images/dr_logo_1.png"
                  alt="Vaidya Barta Logo"
                  className="mobile-logo"
                  width={85}
                  height={45}
                  priority
                />
              </Link>
              <nav
                className="nav-area"
                role="navigation"
                aria-label="Main navigation"
              >
                <ul>
                  <li className="main-nav menu-item-open">
                    <Link href="#introduction">Home</Link>
                  </li>
                  <li className="main-nav">
                    <Link href="#all-features">Features</Link>
                  </li>
                  <li className="main-nav">
                    <Link href="#doctors">Our Doctors</Link>
                  </li>
                  <li className="main-nav">
                    <Link href="#faq">FAQ</Link>
                  </li>
                  <li className="main-nav">
                    <Link href="#contact">Help</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <Link
                href="https://dr.vaidyabarta.com/doctor-login"
                className="rts-btn btn-primary btn-transparent under-line-btn"
                aria-label="Try Vaidya Barta for free"
              >
                Try For Free
              </Link>
              <button
                className="menu-btn"
                id="menu-btn"
                onClick={onToggleSidebar}
                aria-label="Open mobile menu"
                aria-expanded="false"
                type="button"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                  <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                  <rect width="20" height="2" fill="#1F1F25"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => (
  <div
    className={`col-lg-3 col-md-6 col-sm-6 wow fadeInUp`}
    data-wow-delay={`.${2 + (index % 4) * 2}s`}
    data-wow-duration=".8s"
  >
    <article className="single-service-area">
      <div className="icon">
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
      <h4 className="title">{service.title}</h4>
      <p className="disc">{service.description}</p>
    </article>
  </div>
);

const DoctorCard: React.FC<{ doctor: Doctor; index: number }> = ({
  doctor,
  index,
}) => (
  <div
    className={`col-lg-3 col-md-6 col-sm-6 col-12 mb_md--50 mb_sm--50 fadeInLeft wow`}
    data-wow-duration="1s"
    data-wow-delay={`.${1 + index * 2}s`}
  >
    <article className="single-team-area-start team-absolute-bottom">
      <Image
        className="thumbnail"
        src={doctor.image}
        alt={`${doctor.name} - ${doctor.specialty}`}
        width={300}
        height={400}
        loading="lazy"
      />
      <div className="bottom">
        <h6 className="title">{doctor.name}</h6>
        <p>{doctor.specialty}</p>
      </div>
    </article>
  </div>
);

const FAQItem: React.FC<{ 
  faq: FAQ; 
  isOpen: boolean; 
  onToggle: () => void; 
}> = ({ faq, isOpen, onToggle }) => (
  <div className="accordion-item">
    <h3 className="accordion-header">
      <button
        className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={faq.id}
      >
        {faq.question}
      </button>
    </h3>
    <div
      id={faq.id}
      className={`accordion-collapse ${isOpen ? "show" : "collapse"}`}
    >
      <div className="accordion-body">{faq.answer}</div>
    </div>
  </div>
);

// Main component
export default function HomePage(): React.ReactElement {
  const sidebar = useSidebar();
  const { isVisible, progress } = useScrollState();
  const { openFAQ, toggleFAQ } = useFAQAccordion();
  const currentYear = new Date().getFullYear();

  // Remove Next.js dev tools
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

  return (
    <>
      <JsonLd />

      <div className="main-wrapper">
        <Header onToggleSidebar={sidebar.toggle} />

        {/* Hero Section */}
        <section className="rts-banner-area-six position-relative bg_six-image bg_image rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content-banner">
                  <div className="content-wrapper">
                    <div className="pre-title wow fadeInUp">
                      <span>
                        Vaidya Barta : Smart, Seamless Clinic Management
                      </span>
                    </div>
                    <h1 className="title move-right wow">Prioritize Health</h1>
                    <p className="disc move-right">
                      <strong>Vaidya Barta</strong> simplifies healthcare
                      operations with automation and intuitive tools, enabling
                      effortless appointment booking, multilingual
                      prescriptions, and optimized workflows—so you can focus on
                      quality patient care.
                    </p>
                    <Link
                      href="https://dr.vaidyabarta.com/doctor-login"
                      className="rts-btn btn-primary btn-white move-right under-line-btn"
                      aria-label="Get started with Vaidya Barta clinic management"
                    >
                      Get Started
                    </Link>
                  </div>

                  <div className="large-image-thumbnail move-down wow">
                    <Image
                      src="/assets/images/doctorbanner.avif"
                      alt="Healthcare professionals using Vaidya Barta clinic management software"
                      width={800}
                      height={600}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="short-service-area">
            <div className="single-short-service zoomIn wow">
              <div className="icon">
                <Image
                  src="/assets/images/chat.png"
                  alt="Patient communication icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h5 className="title">Chat with Patients</h5>
                <p>Respond messages from Vaidya Barta</p>
              </div>
            </div>
            <div className="single-short-service two zoomIn wow">
              <div className="icon">
                <Image
                  src="/assets/images/layout.png"
                  alt="Prescription templates icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h5 className="title">Prescription Templates</h5>
                <p>Speed up prescriptions with reusable templates</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="introduction"
          className="rts-about-area rts-section-gapBottom about-padding-top"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-image-left-wrapper">
                  <div className="thumbnail-main move-right wow">
                    <Image
                      src="/assets/images/01.avif"
                      alt="Modern clinic management interface showcasing Vaidya Barta features"
                      width={400}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div className="review-area">
                    <div className="stars-area">
                      <div className="wrapper">
                        {[...Array(5)].map((_, index) => (
                          <div key={index} className="single">
                            <i
                              className="fa-sharp fa-solid fa-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                        ))}
                      </div>
                      <div className="content">
                        <span className="brand-name">VAIDYABARTA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt--30">
                <div className="about-content-wrapper-right">
                  <div className="title-wrapper-left">
                    <span className="pre wow fadeInUp">Introduction</span>
                    <h2 className="title wow fadeInUp">
                      The Future of Clinic Management
                    </h2>
                  </div>
                  <p className="disc wow fadeInUp">
                    Vaidya Barta is a next-generation clinic management software
                    designed to simplify and enhance the way healthcare
                    professionals manage their practice. With a seamless and
                    intuitive interface, it empowers doctors, clinics, and
                    healthcare facilities to automate essential tasks, ensuring
                    smooth patient experiences and optimized operations.
                  </p>
                  <p className="disc wow fadeInUp">
                    From effortless patient booking to multilingual prescription
                    generation, Vaidya Barta leverages cutting-edge technology
                    to make clinic management smarter, faster, and more
                    efficient. Our platform adapts to your needs, allowing you
                    to focus on what matters most—quality patient care with ease
                    in management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="all-features"
          className="service-area position-relative rts-section-gapBottom"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6">
                <div className="title-wrapper-left">
                  <span className="pre wow fadeInUp">All Features</span>
                  <h2 className="title wow fadeInUp">
                    We offer a comprehensive
                    <br />
                    range of medical <br />
                    services.
                  </h2>
                  <ul className="feature-list">
                    <li>
                      Prescriptions available in multiple Indian languages for
                      diverse patient needs.
                    </li>
                    <li>
                      Easily generate prescriptions within the clinic workflow.
                    </li>
                    <li>
                      Paperless prescriptions for easy access and sharing.
                    </li>
                    <li>
                      Manage doctor availability with a flexible calendar.
                    </li>
                    <li>
                      Effortless booking with automated reminders for a seamless
                      patient experience.
                    </li>
                  </ul>
                </div>
              </div>

              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="service-content-iamge">
            <Image
              src="/assets/images/13.png"
              alt="Healthcare management illustration"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
        </section>

        {/* Doctors Section */}
        <section
          id="doctors"
          className="team-style-wrapper bg-light rts-section-gap"
        >
          <div className="container pb--40">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-between-area">
                  <div className="title-wrapper-left">
                    <h2 className="title">
                      Discover Expert <br />
                      Doctors
                    </h2>
                  </div>
                  <p className="disc">
                    Our team of dedicated and highly skilled doctors is at the
                    heart of our commitment to providing exceptional medical
                    care. Each member of our team brings a wealth of knowledge,
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--30">
              {DOCTORS.map((doctor, index) => (
                <DoctorCard key={doctor.name} doctor={doctor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="rts-faq-area rts-section-gapBottom rts-section-gap"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="container-wrapper-faq">
                  <div className="title-six-center">
                    <h2 className="title">Frequently Asked Questions</h2>
                  </div>
                  <div className="accordion mt--60">
                    {FAQS.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        faq={faq}
                        isOpen={openFAQ === faq.id}
                        onToggle={() => toggleFAQ(faq.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="request-appoinment-area" id="contact">
          <div className="container-full">
            <div className="row">
              <div className="col-lg-12">
                <div className="request-appoinemnt-area-main-wrapper radious-0 bg_image rts-section-gap">
                  <span className="pre">Try For Free</span>
                  <h2 className="title">Request To Use Our Application</h2>
                  <Link
                    href="https://dr.vaidyabarta.com/doctor-login"
                    className="rts-btn btn-primary under-line-btn"
                    aria-label="Get started with Vaidya Barta free trial"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="rts-footer-area footer-two pt--105 pt_sm--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-area-start pb--30">
                  <Image
                    src="/assets/images/dr_logo_1.png"
                    alt="Vaidya Barta Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="footer-wrapper-style-between">
                  <div className="single-wized">
                    <h6 className="title">Contact Information</h6>
                    <div className="body">
                      <address className="location">
                        Sector-V Salt Lake City, Kolkata, West Bengal 700091
                      </address>
                      <a
                        className="under-line-btn"
                        href="mailto:help@vaidyabarta.com"
                        aria-label="Send email to Vaidya Barta support"
                      >
                        help@vaidyabarta.com
                      </a>
                      <a
                        className="under-line-btn"
                        href="tel:+919831036295"
                        aria-label="Call Vaidya Barta support"
                      >
                        +91 9831036295
                      </a>
                    </div>
                  </div>
                  <div className="single-wized">
                    <h6 className="title">Quick Links</h6>
                    <nav className="body">
                      <ul className="nav-bottom">
                        <li>
                          <Link href="#introduction">Home</Link>
                        </li>
                        <li>
                          <Link href="#all-features">Features</Link>
                        </li>
                        <li>
                          <Link href="#doctors">Our Doctors</Link>
                        </li>
                        <li>
                          <Link href="#faq">FAQ</Link>
                        </li>
                        <li>
                          <Link href="#contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="single-wized">
                    <h6 className="title">Legal Policies</h6>
                    <nav className="body">
                      <ul className="nav-bottom">
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms-conditions">
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="single-wized">
                    <h6 className="title">Working Time</h6>
                    <div className="body">
                      <p className="location">Mon - Fri: 10.00am - 6.00pm</p>
                      <p className="location">Saturday & Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright-area two">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-area-inner">
                  Copyright © Designed &amp; Developed by{" "}
                  <Link
                    className="under-line-btn"
                    href="https://dataluminous.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit DataLuminous website"
                  >
                    DataLuminous
                  </Link>{" "}
                  {currentYear}
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileSidebar isOpen={sidebar.isOpen} onClose={sidebar.close} />
        <ScrollToTopButton isVisible={isVisible} progress={progress} />
      </div>
    </>
  );
}
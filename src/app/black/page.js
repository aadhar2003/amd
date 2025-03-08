"use client";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MasterbatchProduct from "@/components/MasterbatchProduct";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [applications, setApplications] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <Head>
        <title>
          ColorTech Solutions | Premium Color Masterbatch Manufacturer
        </title>
        <meta
          name="description"
          content="Leading manufacturer of high-quality color masterbatches for plastic products. Custom solutions for multiple industries including packaging, consumer goods, and automotive."
        />
        <meta
          name="keywords"
          content="color masterbatch, plastic additives, manufacturing, custom colors"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph tags for better social sharing */}
        <meta
          property="og:title"
          content="ColorTech Solutions | Premium Masterbatch Manufacturer"
        />
        <meta
          property="og:description"
          content="Leading manufacturer of high-quality color masterbatches for plastic products."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://colortechsolutions.com" />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ColorTech Solutions",
              url: "https://colortechsolutions.com",
              logo: "https://colortechsolutions.com/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-1234567890",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>

      <Header />
      <div className="pt-30 mx-5">
        <MasterbatchProduct
          title="Black Masterbatches"
          imageUrl="/black-masterbatches.jpg"
          description={[
            "ACC Masterbatch provides high-quality Black Masterbatches with superior jetness, UV resistance, and dispersion properties. Our formulations ensure excellent color strength, opacity, and thermal stability.",
            "We use premium carbon black and advanced carrier resins to deliver optimal performance across various plastic processing methods.",
            "Our Black Masterbatches are designed for a wide range of applications, ensuring durability, color consistency, and excellent mechanical properties.",
          ]}
          applications={[
            "The applications of Black Masterbatches include:",
            "Automotive Components",
            "Pipes & Fittings",
            "Blow Molding",
            "Injection Molding",
            "Film Extrusion",
            "Textile Fibers",
            "Industrial Packaging",
            "Consumer Goods",
            "Electrical & Electronic Products",
            "Agricultural Films",
          ]}
          features={[
            "High jetness and deep black coloration",
            "Superior dispersion and color consistency",
            "UV-stabilized options for outdoor durability",
            "Optimized for injection, extrusion, and blow molding",
            "Thermal stability for high-temperature processing",
            "High opacity and excellent coverage",
            "Cost-effective formulations for various applications",
          ]}
        />
      </div>

      <main>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center scroll-animate">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 mt-9">
              Custom Color Solutions
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              For your specific requirements we offer a color matching service,
              tailoring the color to your exact specifications.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>

        <ContactForm className="scroll-animate" />
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import WhyUs from "../../components/WhyUs";
import Services from "../../components/Services";
import GallerySection from "../../components/GallerySection";
import Testimonials from "../../components/Testimonials";
import FaqSection from "../../components/FaqSection";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import { PageData } from "../../lib/data";

export default function HomeClient({
  pageTranslations,
}: {
  pageTranslations: Omit<PageData, "fontHead" | "fontBody">;
}) {
  const [scrolled, setScrolled] = useState(false);

  const t: PageData = {
    fontHead: "font-[family-name:var(--font-playfair)]",
    fontBody: "font-[family-name:var(--font-montserrat)]",
    ...pageTranslations,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`${t.fontBody} min-h-screen bg-brand-cream text-brand-dark overflow-x-hidden relative`}>
      <FloatingContact />
      <Header t={t} scrolled={scrolled} scrollToSection={scrollToSection} />
      <main className="pt-20">
        <Hero t={t} scrollToSection={scrollToSection} />
        <WhyUs t={t} />
        <Services t={t} />
        <GallerySection t={t} />
        <Testimonials t={t} />
        <FaqSection t={t} />
      </main>
      <Footer t={t} scrollToSection={scrollToSection} />
    </div>
  );
}

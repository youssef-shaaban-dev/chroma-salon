"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { InstagramIcon } from "./InstagramIcon";
import { PageData } from "../lib/data";

interface HeaderProps {
  t: PageData;
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Header({ t, scrolled, scrollToSection }: HeaderProps) {
  const locale = useLocale();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-brand-rose/20 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer select-none group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/black-logo.jpeg"
            alt="Chroma Salon Logo"
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
        </div>


        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleLinkClick("services")}
            className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleLinkClick("why-us")}
            className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
          >
            {t.nav.whyUs}
          </button>
          <button
            onClick={() => handleLinkClick("testimonials")}
            className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
          >
            {t.nav.testimonials}
          </button>
          <button
            onClick={() => handleLinkClick("cta")}
            className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Desktop Right Side CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={locale === "en" ? "/ar" : "/en"}
            className="px-4 py-1.5 border border-brand-rose/25 text-brand-dark/80 hover:text-brand-rose font-semibold text-sm rounded-full hover:bg-brand-rose-light/20 transition duration-200"
          >
            {locale === "en" ? "عربي" : "English"}
          </a>
          <a
            href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-brand-dark/70 hover:text-brand-rose transition duration-200"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <button
            onClick={() => handleLinkClick("cta")}
            className="bg-brand-rose text-white hover:bg-brand-rose/90 px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-brand-rose/20 transform transition hover:-translate-y-0.5 duration-200"
          >
            {t.nav.bookBtn}
          </button>
        </div>


        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-dark hover:text-brand-rose transition duration-200"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-brand-rose/10 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 font-medium">
              <button
                onClick={() => handleLinkClick("services")}
                className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => handleLinkClick("why-us")}
                className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
              >
                {t.nav.whyUs}
              </button>
              <button
                onClick={() => handleLinkClick("testimonials")}
                className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => handleLinkClick("cta")}
                className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
              >
                {t.nav.contact}
              </button>
              <a
                href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-rose transition duration-200 flex items-center justify-between"
              >
                <span>Instagram</span>
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={locale === "en" ? "/ar" : "/en"}
                className="text-brand-dark hover:text-brand-rose transition duration-200 flex items-center justify-between font-semibold"
              >
                <span>{locale === "en" ? "النسخة العربية" : "English Version"}</span>
                <span className="text-sm px-2 py-1 bg-brand-rose/10 text-brand-rose rounded-md">
                  {locale === "en" ? "عربي" : "EN"}
                </span>
              </a>
              <button
                onClick={() => handleLinkClick("cta")}
                className="bg-brand-rose text-white w-full py-3 rounded-full text-center font-semibold shadow-md hover:shadow-brand-rose/20 transform hover:-translate-y-0.5 duration-200"
              >
                {t.nav.bookBtn}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CalendarCheck, ChevronRight, ChevronLeft } from "lucide-react";
import { fadeInUp, PageData } from "../lib/data";

interface HeroProps {
  t: PageData;
  scrollToSection: (id: string) => void;
}

const slides = [
  { src: "/hero.png", alt: "Chroma Salon Premium Hair" },
  { src: "/services.png", alt: "Chroma Signature Elite Services" },
  { src: "/bridal_styling.png", alt: "Exquisite Bridal Transformations" },
  { src: "/lip_microblading.png", alt: "Premium Lip Microblading" },
];

export default function Hero({ t, scrollToSection }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-16 px-6 lg:px-12 bg-linear-to-b from-brand-rose-light/40 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content / Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left rtl:text-right"
        >
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-brand-rose-light border border-brand-rose/20 px-4 py-1.5 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span className="text-sm font-semibold text-brand-rose uppercase tracking-wider">
              Welcome to Chroma Salon
            </span>
          </div>
          <h1
            className={`${t.fontHead} text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight`}
          >
            {t.hero.h1}
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-xl font-light">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 rtl:space-x-reverse">
            <motion.a
              href="https://wa.me/962799639434"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-brand-rose text-white text-base hover:bg-brand-rose/95 px-8 py-4 rounded-full font-bold text-center tracking-wide shadow-lg hover:shadow-brand-rose/30 transition duration-300 block"
            >
              {t.hero.cta}
            </motion.a>
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-brand-rose/30 bg-white/60 hover:bg-white text-brand-dark text-base px-8 py-4 rounded-full font-bold transition duration-300"
            >
              <span>{t.nav.services}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </motion.div>

        {/* Right Side / Premium Visual Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative aspect-square sm:aspect-video lg:aspect-auto w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows on Slider */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
              }}
              className="w-11 h-11 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md border border-white/20 text-brand-dark hover:text-brand-rose flex items-center justify-center pointer-events-auto transition duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev + 1) % slides.length);
              }}
              className="w-11 h-11 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md border border-white/20 text-brand-dark hover:text-brand-rose flex items-center justify-center pointer-events-auto transition duration-300 shadow-md hover:shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-2 rtl:space-x-reverse z-20 pointer-events-auto select-none">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                  activeIndex === idx
                    ? "bg-brand-rose w-7 cursor-default"
                    : "bg-white/60 hover:bg-white w-2.5 cursor-pointer"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Overlay Glass Badge */}
          <motion.a
            href="https://wa.me/962799639434"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="absolute bottom-6 left-6 rtl:left-auto rtl:right-6 bg-white/75 backdrop-blur-md px-6 py-4 rounded-2xl border border-brand-rose/20 max-w-xs shadow-xl hidden sm:flex items-center space-x-4 rtl:space-x-reverse z-30 cursor-pointer"
          >
            <CalendarCheck className="w-10 h-10 text-brand-rose flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">{t.hero.badgeTitle}</h4>
              <p className="text-xs text-brand-dark/80 mt-0.5">
                {t.hero.badgeDesc}
              </p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

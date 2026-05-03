"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, ChevronRight } from "lucide-react";
import { fadeInUp, PageData } from "../lib/data";

interface HeroProps {
  t: PageData;
  scrollToSection: (id: string) => void;
}

export default function Hero({ t, scrollToSection }: HeroProps) {

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-16 px-6 lg:px-12 bg-gradient-to-b from-brand-rose-light/40 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content / Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-rose-light border border-brand-rose/20 px-4 py-1.5 rounded-full w-fit">
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
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <motion.button
              onClick={() => scrollToSection("booking")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-brand-rose text-white text-base hover:bg-brand-rose/95 px-8 py-4 rounded-full font-bold text-center tracking-wide shadow-lg hover:shadow-brand-rose/30 transition duration-300"
            >
              {t.hero.cta}
            </motion.button>
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-brand-rose/30 bg-white/60 hover:bg-white text-brand-dark text-base px-8 py-4 rounded-full font-bold transition duration-300"
            >
              <span>{t.nav.services}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Side / Premium Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative aspect-square sm:aspect-video lg:aspect-auto w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <Image
            src="/hero.png"
            alt="Chroma Salon Luxury Aesthetic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition duration-500 hover:scale-105"
          />
          {/* Overlay Glass Badge */}
          <div className="absolute bottom-6 left-6 bg-white/75 backdrop-blur-md px-6 py-4 rounded-2xl border border-brand-rose/20 max-w-xs shadow-xl hidden sm:flex items-center space-x-4">
            <CalendarCheck className="w-10 h-10 text-brand-rose flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">Fast Bookings</h4>
              <p className="text-xs text-brand-dark/70 mt-0.5">
                Book in seconds without friction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { PageData, fadeInUp } from "../lib/data";

interface CtaSectionProps {
  t: PageData;
}

export default function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="cta" className="py-24 px-6 lg:px-12 bg-white text-center relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-rose-light/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
            Let's Connect
          </span>
          <h2 className={`${t.fontHead} text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight`}>
            {t.cta.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light max-w-xl mx-auto">
            {t.cta.sub}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="https://wa.me/962799639434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-rose text-white hover:bg-brand-rose/90 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-brand-rose/40 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.cta.whatsapp}</span>
          </a>
          <a
            href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-brand-cream/50 border border-brand-rose/25 text-brand-dark px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-brand-rose/10 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 w-full sm:w-auto"
          >
            <InstagramIcon className="w-5 h-5 text-brand-rose" />
            <span>{t.cta.instagram}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

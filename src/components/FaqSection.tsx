"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PageData, fadeInUp, staggerContainer } from "../lib/data";

interface FaqSectionProps {
  t: PageData;
}

export default function FaqSection({ t }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 px-6 lg:px-12 bg-brand-cream/20 border-t border-brand-rose/10">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center space-y-4 max-w-xl mx-auto"
        >
          <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
            Inquiries
          </span>
          <h2 className={`${t.fontHead} text-3xl sm:text-4xl font-bold text-brand-dark leading-tight`}>
            {t.faqs.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light">
            {t.faqs.sub}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {t.faqs.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/60 backdrop-blur-sm border border-brand-rose/15 hover:border-brand-rose/30 rounded-2xl overflow-hidden transition duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-brand-dark select-none"
                >
                  <span className="text-lg text-left">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-rose flex-shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-brand-dark/75 font-light text-base leading-relaxed text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

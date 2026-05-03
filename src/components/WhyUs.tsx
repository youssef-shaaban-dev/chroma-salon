"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, PageData } from "../lib/data";

interface WhyUsProps {
  t: PageData;
}

export default function WhyUs({ t }: WhyUsProps) {

  return (
    <section
      id="why-us"
      className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-brand-cream/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
            Pure Luxury & Comfort
          </span>
          <h2 className={`${t.fontHead} text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark`}>
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light">{t.whyUs.sub}</p>
        </motion.div>

        {/* Custom Icon Value Points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.whyUs.points.map((pt, i) => {
            const icons = [
              <Award key={0} className="w-7 h-7 text-brand-rose" />,
              <ShieldCheck key={1} className="w-7 h-7 text-brand-rose" />,
              <CheckCircle2 key={2} className="w-7 h-7 text-brand-rose" />,
              <Sparkles key={3} className="w-7 h-7 text-brand-rose" />,
            ];
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="flex flex-col bg-white border border-brand-rose/10 hover:border-brand-rose/30 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="bg-brand-rose-light p-4 rounded-xl w-fit mb-6">
                  {icons[i]}
                </div>
                <h3 className={`${t.fontHead} text-xl font-bold text-brand-dark mb-3`}>
                  {pt.title}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, PageData } from "../lib/data";

interface TestimonialsProps {
  t: PageData;
}

export default function Testimonials({ t }: TestimonialsProps) {

  return (
    <section
      id="testimonials"
      className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-brand-rose-light/30 border-y border-brand-rose/10"
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
            Happy Clients
          </span>
          <h2 className={`${t.fontHead} text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark`}>
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light">{t.testimonials.sub}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.testimonials.reviews.map((rev, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white/70 backdrop-blur-sm border border-brand-rose/15 hover:border-brand-rose/30 p-8 rounded-2xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Sparkles key={idx} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark/80 italic font-light leading-relaxed">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-brand-rose/10 pt-4">
                <div className="w-10 h-10 bg-brand-rose text-white text-lg font-bold rounded-full flex items-center justify-center">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark">{rev.name}</h4>
                  <span className="text-xs text-brand-dark/50">Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

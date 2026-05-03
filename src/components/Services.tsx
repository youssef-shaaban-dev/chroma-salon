"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer, PageData } from "../lib/data";

export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  date: string;
}

interface ServicesProps {
  t: PageData;
}


export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-4 flex flex-col justify-between h-full space-y-8"
        >
          <div className="space-y-4 text-left">
            <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
              Curated Perfection
            </span>
            <h2 className={`${t.fontHead} text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight`}>
              {t.services.title}
            </h2>
            <p className="text-lg text-brand-dark/70 font-light max-w-sm">
              {t.services.sub}
            </p>
          </div>

          {/* Aesthetic Service Sidebar Visual */}
          <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-rose/15 hidden md:block">
            <Image
              src="/services.png"
              alt="Fine quality aesthetic skincare services"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transform scale-105 hover:scale-110 transition duration-700"
            />
          </div>
        </motion.div>

        {/* Right Content Column (Service Cards Grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
           {t.services.cards.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-brand-cream/40 backdrop-blur-sm border border-brand-rose/10 hover:border-brand-rose/40 hover:bg-white rounded-3xl p-8 flex flex-col justify-between space-y-6 transition duration-300 relative overflow-hidden group h-[320px] shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rose-light/30 rounded-bl-full pointer-events-none group-hover:bg-brand-rose-light/50 transition duration-500"></div>

              <div className="flex flex-col space-y-3 relative z-10 text-left">
                <span className="text-xs font-bold text-brand-rose uppercase tracking-wider bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                  0{i + 1} • Signature
                </span>
                <h3 className={`${t.fontHead} text-2xl font-bold text-brand-dark group-hover:text-brand-rose transition duration-200`}>
                  {service.title}
                </h3>
                <p className="text-brand-dark/70 font-light text-sm leading-relaxed max-w-sm">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-brand-rose/10 relative z-10">
                <button
                  onClick={() => window.open(`https://wa.me/962799639434?text=Hello,%20I'd%20like%20to%20book%20an%20appointment%20for:%20${encodeURIComponent(service.title)}`, "_blank")}
                  className="text-brand-rose text-sm font-bold flex items-center gap-1.5 hover:underline"
                >
                  <span>{t.nav.bookBtn}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

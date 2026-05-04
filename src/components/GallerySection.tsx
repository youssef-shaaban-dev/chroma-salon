"use client";

import { motion } from "framer-motion";
import { PageData, fadeInUp, staggerContainer } from "../lib/data";

interface GallerySectionProps {
  t: PageData;
}

const GALLERY_ITEMS = [
  { src: "/chroma.mp4", alt: "Signature Transformation", fallback: "/chroma.mp4" },
  { src: "/chroma-2.mp4", alt: "Master Artistry", fallback: "/chroma-2.mp4" },
  { src: "/chroma-3.mp4", alt: "Special Occasions & Styling", fallback: "/chroma.mp4" },
  { src: "/chroma-4.mp4", alt: "Complete Luxury Care", fallback: "/chroma-2.mp4" },
];

export default function GallerySection({ t }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-white/40">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
            Our Work
          </span>
          <h2 className={`${t.fontHead} text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight`}>
            {t.gallery.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light">
            {t.gallery.sub}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] sm:aspect-[9/16] rounded-3xl overflow-hidden shadow-md border border-brand-rose/15 bg-brand-dark flex flex-col justify-between group select-none"
            >
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                onError={(e) => {
                  e.currentTarget.src = item.fallback;
                }}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500 select-none pointer-events-auto"
              />

              {/* Shared Glassmorphic Bottom Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-white/70 hover:bg-white/90 backdrop-blur-md border-t border-brand-rose/15 transition duration-300 flex items-center justify-between px-5 z-20 select-none">
                <span className="text-brand-dark font-bold text-sm sm:text-base tracking-wide truncate">
                  {item.alt}
                </span>
                <span className="flex items-center space-x-1.5 rtl:space-x-reverse flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-brand-rose animate-pulse" />
                  <span className="text-brand-rose font-bold text-xs uppercase tracking-wider">
                    Live
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

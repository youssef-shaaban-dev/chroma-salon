"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageData, fadeInUp, staggerContainer } from "../lib/data";

interface GallerySectionProps {
  t: PageData;
}

const GALLERY_IMAGES = [
  { src: "/hero.png", alt: "Signature Hairstyling" },
  { src: "/services.png", alt: "Skincare Transformation" },
  { src: "/skincare_treatment.png", alt: "Bridal Glow" },
  { src: "/bridal_styling.png", alt: "Ultimate Care" },
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-brand-rose/15 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

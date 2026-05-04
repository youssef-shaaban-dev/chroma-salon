"use client";

import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";


import { PageData } from "../lib/data";

interface FooterProps {
  t: PageData;
  scrollToSection: (id: string) => void;
}

export default function Footer({ t, scrollToSection }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 px-6 lg:px-12 border-t border-brand-rose/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left mb-12">
        {/* Logo Brand / Summary */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/white-logo.jpg"
              alt="Chroma Salon Logo"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />

          </div>

          <p className="text-sm font-light text-white/70 leading-relaxed max-w-sm">
            {t.footer.desc}
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-brand-rose rounded-full transition duration-300"
            >
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://wa.me/962799639434"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-green-500 rounded-full transition duration-300"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Info & Schedule */}
        <div className="md:col-span-4 space-y-3">
          <h4 className={`${t.fontHead} text-lg font-bold tracking-wide`}>
            {t.footer.info}
          </h4>
          <p className="text-sm font-light text-white/70">{t.footer.hours}</p>
          <p className="text-sm font-light text-white/70">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chroma+by+Hair+Boy+Amman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-rose hover:underline underline-offset-4 flex items-center gap-2 transition duration-200"
            >
              <MapPin className="w-4 h-4 text-brand-rose flex-shrink-0" />
              <span>{t.footer.location}</span>
            </a>
          </p>
        </div>

        {/* Call to Action Call now */}
        <div className="md:col-span-4 space-y-4">
          <h4 className={`${t.fontHead} text-lg font-bold tracking-wide`}>
            {t.footer.help}
          </h4>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+962799639434"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 px-6 py-3.5 rounded-full text-white font-medium transition duration-200"
            >
              <Phone className="w-4 h-4 text-brand-rose" />
              <span>{t.footer.callUs}</span>
            </a>
            <a
              href="https://wa.me/962799639434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 px-6 py-3.5 rounded-full text-green-400 font-medium transition duration-200"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>{t.footer.chatUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copy / Fine Print */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
        <p>{t.footer.copy}</p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-brand-rose transition duration-200"
          >
            {t.nav.services}
          </button>
          <a
            href="https://wa.me/962799639434"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-rose transition duration-200"
          >
            {t.nav.bookBtn}
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, X } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export default function FloatingContact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 select-none">
      <AnimatePresence>
        {isContactOpen && (
          <div className="flex flex-col items-end space-y-3">
            {/* Instagram Sub-button */}
            <motion.a
              href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition duration-200"
            >
              <InstagramIcon className="w-5 h-5" />
            </motion.a>

            {/* WhatsApp Sub-button */}
            <motion.a
              href="https://wa.me/962799639434"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Glow Pulsating Main Toggle Button */}
      <motion.button
        onClick={() => setIsContactOpen(!isContactOpen)}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: 1,
          boxShadow: [
            "0 0 0px 0px rgba(183, 110, 121, 0.4)",
            "0 0 15px 6px rgba(183, 110, 121, 0.4)",
            "0 0 0px 0px rgba(183, 110, 121, 0.4)",
          ],
        }}
        transition={{
          boxShadow: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
          scale: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px 8px rgba(183, 110, 121, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-rose hover:bg-brand-rose/95 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative z-50 select-none outline-none"
      >
        {isContactOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { fadeInUp, PageData } from "../lib/data";
import { BookingForm } from "./Services";

interface BookingSectionProps {
  t: PageData;
  setBookingForm: (val: BookingForm) => void;
  bookingForm: BookingForm;
}


export default function BookingSection({ t, setBookingForm, bookingForm }: BookingSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.phone && bookingForm.service && bookingForm.date) {
      setFormSubmitted(true);
      setBookingForm({ name: "", phone: "", service: "", date: "" });
    }
  };

  return (
    <section id="booking" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white border border-brand-rose/25 p-8 sm:p-12 rounded-3xl shadow-2xl hover:shadow-brand-rose/5 relative overflow-hidden transition duration-300"
        >
          <div className="absolute top-0 left-0 w-36 h-36 bg-brand-rose-light/20 rounded-br-full pointer-events-none"></div>

          {/* Form Heading */}
          <div className="text-center max-w-md mx-auto space-y-4 mb-10 relative z-10">
            <span className="text-brand-rose font-bold text-sm tracking-wider uppercase">
              Reserve Your Slot
            </span>
            <h2 className={`${t.fontHead} text-3xl sm:text-4xl font-bold text-brand-dark`}>
              {t.booking.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-dark/70 font-light">
              {t.booking.sub}
            </p>
          </div>

          {/* Form Content / Success Area */}
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col items-center justify-center text-center space-y-5 py-8 min-h-[300px]"
              >
                <div className="bg-brand-rose-light p-5 rounded-full border border-brand-rose/20">
                  <CheckCircle2 className="w-12 h-12 text-brand-rose" />
                </div>
                <h3 className={`${t.fontHead} text-2xl font-bold text-brand-dark`}>
                  {t.booking.successTitle}
                </h3>
                <p className="text-brand-dark/70 font-light max-w-sm">
                  {t.booking.successDesc}
                </p>
                <a
                  href="https://wa.me/962799639434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.booking.whatsappBtn}</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-brand-rose font-bold hover:underline"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
              >
                {/* Full Name */}
                <div className="flex flex-col space-y-2 text-left">
                  <label className="text-sm font-bold text-brand-dark/90">
                    {t.booking.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.booking.namePlace}
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-brand-cream/30 border border-brand-rose/20 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-dark placeholder-brand-dark/40 font-light focus:outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-2 text-left">
                  <label className="text-sm font-bold text-brand-dark/90">
                    {t.booking.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.booking.phonePlace}
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full px-5 py-3.5 bg-brand-cream/30 border border-brand-rose/20 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-dark placeholder-brand-dark/40 font-light focus:outline-none transition"
                  />
                </div>

                {/* Choose Service Select */}
                <div className="flex flex-col space-y-2 text-left">
                  <label className="text-sm font-bold text-brand-dark/90">
                    {t.booking.serviceLabel}
                  </label>
                  <select
                    required
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                    className="w-full px-5 py-3.5 bg-brand-cream/30 border border-brand-rose/20 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-dark font-light focus:outline-none transition cursor-pointer"
                  >
                    <option value="" disabled>
                      {t.booking.servicePlace}
                    </option>
                    {t.services.cards.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col space-y-2 text-left">
                  <label className="text-sm font-bold text-brand-dark/90">
                    {t.booking.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-5 py-3.5 bg-brand-cream/30 border border-brand-rose/20 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-dark font-light focus:outline-none transition cursor-pointer"
                  />
                </div>

                {/* Submission Button */}
                <div className="sm:col-span-2 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-brand-rose text-white text-base py-4 rounded-xl font-bold shadow-lg hover:bg-brand-rose/95 hover:shadow-brand-rose/30 transition duration-300 tracking-wide text-center"
                  >
                    {t.booking.submit}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

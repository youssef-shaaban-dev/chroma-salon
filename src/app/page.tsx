"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Award,
  ShieldCheck,
  CalendarCheck,
  Menu,
  X,
  Phone,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const pageData = {
  fontHead: "font-[family-name:var(--font-playfair)]",
  fontBody: "font-[family-name:var(--font-montserrat)]",
  nav: {
    services: "Services",
    whyUs: "Why Us",
    testimonials: "Reviews",
    contact: "Contact",
    bookBtn: "Book Now",
  },
  hero: {
    h1: "Discover Your True Radiance at Chroma Salon",
    sub: "Premium hair, skin, and nail services by certified beauty experts.",
    cta: "Book Your Appointment Now",
  },
  whyUs: {
    title: "Why Choose Chroma Salon",
    sub: "Dedicated to bringing out your inner beauty through expert care.",
    points: [
      {
        title: "Certified Experts",
        desc: "Our top beauty specialists hold prestigious international certifications.",
      },
      {
        title: "Premium Products",
        desc: "We use exclusively premium, high-performance, skin-friendly products.",
      },
      {
        title: "Sterilized Environment",
        desc: "Strict adherence to medical-grade sterilization for ultimate safety.",
      },
      {
        title: "Free Consultation",
        desc: "Receive tailored, professional beauty assessments with every visit.",
      },
    ],
  },
  services: {
    title: "Our Signature Services",
    sub: "A curated range of high-end beauty treatments for ultimate luxury.",
    cards: [
      {
        id: "hair",
        title: "Elite Hair Styling & Coloring",
        desc: "Custom cuts, multidimensional coloring, and deep restoration therapies.",
        price: "Starting from $45",
      },
      {
        id: "skincare",
        title: "Premium Skincare & Facials",
        desc: "Revitalize your glow with medical-grade facials and clinical-level hydration.",
        price: "Starting from $65",
      },
      {
        id: "makeup",
        title: "Bridal & Evening Makeup",
        desc: "Breathtaking bridal transformations and camera-ready glamor.",
        price: "Starting from $120",
      },
      {
        id: "nails",
        title: "Luxury Nail Art & Care",
        desc: "Flawless manicures, pedicures, and modern bespoke extensions.",
        price: "Starting from $35",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    sub: "Hear directly from our wonderful clients about their salon experience.",
    reviews: [
      {
        name: "Eleanor Vance",
        text: "The most relaxing and professional salon experience I've ever had. My hair feels absolutely incredible and soft!",
      },
      {
        name: "Sophia Martinez",
        text: "Perfect facials! My skin was glowing for weeks. The aesthetic here is so calming and luxurious.",
      },
      {
        name: "Amira Yusuf",
        text: "An amazing bridal makeup experience. The artists were so intuitive about what works best with my features.",
      },
    ],
  },
  booking: {
    title: "Instant Booking",
    sub: "Fill in your details below and our team will confirm your slot within minutes.",
    nameLabel: "Full Name",
    namePlace: "e.g. Eleanor Vance",
    phoneLabel: "Phone Number",
    phonePlace: "e.g. +962 7 9963 9434",
    serviceLabel: "Select Service",
    servicePlace: "Choose a service...",
    dateLabel: "Preferred Date",
    submit: "Confirm Booking",
    whatsappBtn: "Chat on WhatsApp",
    successTitle: "Booking Confirmed!",
    successDesc: "Thank you for choosing Chroma Salon! Our team will reach out via Phone/WhatsApp shortly to confirm your booking details.",
  },
  footer: {
    hours: "Hours: Mon - Sat: 10am - 9pm | Sun: Closed",
    location: "Luxury Beauty Blvd, Uptown District, 5th Floor",
    copy: "© 2026 Chroma Salon. All Rights Reserved.",
    callUs: "Call Us Now",
    chatUs: "WhatsApp",
  },
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const t = pageData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.phone && bookingForm.service && bookingForm.date) {
      setFormSubmitted(true);
      setBookingForm({ name: "", phone: "", service: "", date: "" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`${t.fontBody} min-h-screen bg-brand-cream text-brand-dark overflow-x-hidden relative`}
    >
      {/* Floating Action Menu */}
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


      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-brand-rose/20 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Sparkles className="w-7 h-7 text-brand-rose" />
            <h1
              className={`${t.fontHead} text-2xl font-bold tracking-wide text-brand-dark cursor-pointer`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Chroma <span className="text-brand-rose">Salon</span>
            </h1>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
            >
              {t.nav.whyUs}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-brand-dark/80 hover:text-brand-rose font-medium transition duration-200"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Desktop Right Side CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-dark/70 hover:text-brand-rose transition duration-200"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-brand-rose text-white hover:bg-brand-rose/90 px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-brand-rose/20 transform transition hover:-translate-y-0.5 duration-200"
            >
              {t.nav.bookBtn}
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark hover:text-brand-rose transition duration-200"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-brand-rose/10 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col space-y-4 px-6 py-6 font-medium">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
                >
                  {t.nav.whyUs}
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
                >
                  {t.nav.testimonials}
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-brand-dark hover:text-brand-rose transition duration-200 text-left"
                >
                  {t.nav.contact}
                </button>
                <a
                  href="https://www.instagram.com/chroma.byhairboy?igsh=M2d6YjlzajU4dnJs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark hover:text-brand-rose transition duration-200 flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="bg-brand-rose text-white w-full py-3 rounded-full text-center font-semibold shadow-md hover:shadow-brand-rose/20 transform hover:-translate-y-0.5 duration-200"
                >
                  {t.nav.bookBtn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center py-16 px-6 lg:px-12 bg-gradient-to-b from-brand-rose-light/40 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content / Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-rose-light border border-brand-rose/20 px-4 py-1.5 rounded-full w-fit">
                <Sparkles className="w-4 h-4 text-brand-rose" />
                <span className="text-sm font-semibold text-brand-rose uppercase tracking-wider">
                  Welcome to Chroma Salon
                </span>
              </div>
              <h1
                className={`${t.fontHead} text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight`}
              >
                {t.hero.h1}
              </h1>
              <p className="text-lg md:text-xl text-brand-dark/80 max-w-xl font-light">
                {t.hero.sub}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <motion.button
                  onClick={() => scrollToSection("booking")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-brand-rose text-white text-base hover:bg-brand-rose/95 px-8 py-4 rounded-full font-bold text-center tracking-wide shadow-lg hover:shadow-brand-rose/30 transition duration-300"
                >
                  {t.hero.cta}
                </motion.button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-brand-rose/30 bg-white/60 hover:bg-white text-brand-dark text-base px-8 py-4 rounded-full font-bold transition duration-300"
                >
                  <span>{t.nav.services}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Side / Premium Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative aspect-square sm:aspect-video lg:aspect-auto w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/hero.png"
                alt="Chroma Salon Luxury Aesthetic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition duration-500 hover:scale-105"
              />
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-6 left-6 bg-white/75 backdrop-blur-md px-6 py-4 rounded-2xl border border-brand-rose/20 max-w-xs shadow-xl hidden sm:flex items-center space-x-4">
                <CalendarCheck className="w-10 h-10 text-brand-rose flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark">Fast Bookings</h4>
                  <p className="text-xs text-brand-dark/70 mt-0.5">
                    Book in seconds without friction
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
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

        {/* Signature Services Section */}
        <section id="services" className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column (Hero visual) */}
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

                  <div className="flex items-center justify-between pt-4 border-t border-brand-rose/10 relative z-10">
                    <span className="text-lg font-extrabold text-brand-dark">
                      {service.price}
                    </span>
                    <button
                      onClick={() => {
                        setBookingForm({ ...bookingForm, service: service.title });
                        scrollToSection("booking");
                      }}
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

        {/* Real Testimonials (Social Proof) */}
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

        {/* Dynamic & Easy Instant Booking Form */}
        <section
          id="booking"
          className="py-24 px-6 lg:px-12 bg-white"
        >
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
      </main>

      {/* Footer Section */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 px-6 lg:px-12 border-t border-brand-rose/10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left mb-12">
          {/* Logo Brand / Summary */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-7 h-7 text-brand-rose" />
              <h2 className={`${t.fontHead} text-2xl font-bold tracking-wide`}>
                Chroma <span className="text-brand-rose">Salon</span>
              </h2>
            </div>
            <p className="text-sm font-light text-white/70 leading-relaxed max-w-sm">
              The pinnacle of luxury hair, skincare, and bridal expertise. Redefine your beauty.
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
              Our Information
            </h4>
            <p className="text-sm font-light text-white/70">{t.footer.hours}</p>
            <p className="text-sm font-light text-white/70">{t.footer.location}</p>
          </div>

          {/* Call to Action Call now */}
          <div className="md:col-span-4 space-y-4">
            <h4 className={`${t.fontHead} text-lg font-bold tracking-wide`}>
              Instant Help
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
            <button
              onClick={() => scrollToSection("booking")}
              className="hover:text-brand-rose transition duration-200"
            >
              {t.nav.bookBtn}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/hero1.jpg"

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-gray-900"
    >
      {/* Background Image (Parallax) */}
      <motion.img
        style={{ y: imageY }}
        src={heroImage}
        alt="Young people collaborating"
        className="absolute inset-0 w-full h-[120%] object-cover object-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Dynamic Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 sm:bg-gradient-to-r sm:from-black/85 sm:via-black/65 sm:to-red-900/30"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-5 sm:px-6 text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-red-500 font-semibold tracking-widest uppercase text-xs sm:text-sm"
        >
          Innviile Foundation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.15] sm:leading-tight max-w-4xl"
        >
          Co-Creating the Future with Young People
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 sm:mt-6 text-white/80 max-w-xl sm:max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed"
        >
          We empower young people through entrepreneurship, skills
          development, internships, and advocacy—creating opportunities that
          enable them to lead change in their communities.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            to="/programs"
            className="group bg-red-500 hover:bg-red-600 active:bg-red-700 px-6 py-3.5 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors shadow-lg shadow-red-500/20 flex items-center justify-center gap-2"
          >
            Explore Our Programs
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            state={{ reason: "Partnership / Sponsorship" }}
            className="border border-white/40 hover:border-white hover:bg-white/10 active:bg-white/20 px-6 py-3.5 sm:py-3 rounded-md text-sm sm:text-base transition-colors text-center"
          >
            Partner With Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm animate-bounce hidden xs:flex items-center gap-1.5"
      >
        Scroll to explore
        <span aria-hidden="true">↓</span>
      </motion.div>
    </section>
  );
}
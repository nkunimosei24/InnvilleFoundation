import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { label: "Employability Initiatives", value: 10, suffix: "+" },
  { label: "Youth Empowered", value: 2000, suffix: "+" },
  { label: "Businesses Supported", value: 200, suffix: "+" },
];

export default function ImpactStats() {
  return (
    <section className="relative bg-white py-14 sm:py-16 overflow-hidden">
      {/* Subtle dot texture, echoes CTA section for brand cohesion */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <p className="text-center text-red-400 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-10 sm:mb-12">
          Our Impact So Far
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center py-8 sm:py-0 sm:px-6"
            >
              {/* Live status dot */}
              <span className="relative flex h-2 w-2 mb-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>

              <h3 className="text-4xl sm:text-5xl font-bold text-red-500 tracking-tight tabular-nums group-hover:text-red-400 transition-colors duration-300">
                <CountUp end={item.value} />
                <span className="text-red-500">{item.suffix}</span>
              </h3>

              <p className="mt-3 text-black/60 text-xs sm:text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
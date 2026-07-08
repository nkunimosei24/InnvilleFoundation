import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { label: "Youth Engaged", value: 10000, suffix: "+" },
  { label: "Communities Reached", value: 50, suffix: "+" },
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Partners", value: 30, suffix: "+" },
];

export default function ImpactStats() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-red-500">
              <CountUp end={item.value} />{item.suffix}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
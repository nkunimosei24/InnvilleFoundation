import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Megaphone } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Youth Employability",
    text: "We prepare young people for meaningful employment through entrepreneurship development, practical skills training, internships, and career pathways. Our goal is to equip them with the competencies, experience, and opportunities they need to build sustainable livelihoods and become innovators, problem-solvers, and job creators.",
  },
  {
    icon: Megaphone,
    title: "Youth Advocacy",
    text: "We amplify youth voices by creating platforms for self-advocacy, policy engagement, and meaningful participation in decision-making. Through advocacy initiatives, we empower young people to influence systems, shape policies, and lead positive change within their communities.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            What We Do
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Championing youth employment across Ghana
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything we do is anchored on two strategic pillars that guide our
            programs, partnerships, and impact. Together, they help young people
            build careers, create opportunities, and become active leaders in
            shaping a better future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 text-5xl sm:text-6xl font-bold text-gray-50 select-none group-hover:text-red-50 transition-colors duration-300">
                  0{index + 1}
                </span>

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="relative mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="relative mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
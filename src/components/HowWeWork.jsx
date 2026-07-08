import { Lightbulb, GraduationCap, Megaphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Entrepreneurship",
    text: "We support youth-led startups and small businesses to start, grow, and scale through incubation, mentorship, and access to resources—helping young people build sustainable, scalable businesses.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Skills Training & Development",
    text: "We equip young people with practical, future-relevant digital, entrepreneurial, and professional skills aligned with market needs, creating direct pathways from learning to earning.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Advocacy",
    text: "We amplify youth voices through self-advocacy and policy engagement, creating platforms for young people to participate in decision-making and influence systems that shape their future.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            How We Work
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Where We Concentrate Our Impact
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything we do is anchored on these three focus areas—equipping
            young people with skills, opportunity, and a voice to shape the
            future of their communities.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-red-200 via-red-300 to-red-200"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl sm:text-5xl font-bold text-red-100 group-hover:text-red-200 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>

                  {/* Mobile connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-3" aria-hidden="true">
                      <div className="w-0.5 h-6 bg-red-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
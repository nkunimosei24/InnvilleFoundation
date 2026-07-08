import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Venture Now program gave me the structure and mentorship I needed to turn my idea into an actual registered business. I went from sketches on paper to my first paying customers in four months.",
    name: "Ama Owusu",
    role: "Founder, GreenPack Ghana",
    program: "Venture Now Incubation",
  },
  {
    quote:
      "Through the National Internship Program, I got real workplace experience that no classroom could have taught me. It's the reason I landed a full-time role right after school.",
    name: "Kwabena Mensah",
    role: "Software Engineer",
    program: "National Internship Program",
  },
  {
    quote:
      "SkillSet Lab didn't just teach me digital skills—it connected me to a community of people building alongside me. That support system made all the difference.",
    name: "Efua Asante",
    role: "Freelance Designer",
    program: "SkillSet Lab",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Voices of Impact
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What Our Community Says
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
            Real stories from young people who turned opportunity into impact
            through our programs.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Star rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-red-500 text-red-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-semibold text-sm shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <p className="text-xs text-red-500 font-medium mt-0.5">
                    {t.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Quote, Star } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAllPrograms } from "../hooks/useAllPrograms";
import { linkifyProgramNames } from "../utils/linkifyProgramNames";

const testimonials = [
  {
    quote:
      "I've had the privilege of participating in two of their training programmes, Graphic Design and AI for Work Productivity. The impact has been both immediate and lasting. The three-day AI for Work Productivity training (in April) challenged participants to design a flyer and build a website for a business of our choice using AI tools.",
    name: "Diana Osei",
    role: "SkillSet Lab Fellow",
    program: "SkillSet Lab",
    linkedin: "https://www.linkedin.com/posts/dianadosei_worldyouthskillsday-worldyouthskillsday-ai-activity-7483269382228316160-RmwV?utm_source=share&utm_medium=member_ios&rcm=ACoAADKIUOgB1kihOFFIGZdmf-_bNfnuvBde9ek",
  },
  {
    quote:
      "This experience has provided me with a valuable platform to develop practical skills, gain industry exposure, and contribute meaningfully to organizational operations. I truly appreciate the trust and support extended to me throughout this journey.",
    name: "Eric Ocrah Sarpong",
    role: "Administrative Assistant Intern",
    program: "National Internship Program",
    linkedin:
      "https://www.linkedin.com/posts/eric-ocrah-sarpong_invillefoundation-nationalinternshipprogram-activity-7444701380222574592-tzfl",
  },
  {
    quote:
      "My recent internship programme with the Innville Foundation just came to an end, and I'm incredibly grateful for the experience. I had the privilege of working with two exceptional interns who were committed, eager to learn, and genuinely invested in helping Freshlys move forward.",
    name: "Esther Ofori Boadu",
    role: "CEO, Freshlys Family Farms",
    program: "BizBridge Project",
    linkedin:
      "https://www.linkedin.com/posts/esther-ofori-boadu-248972202_scalingseries-leadership-entrepreneurship-share-7475812479382765570-kCfJ",
  },
];

export default function Testimonials() {
  const { allPrograms } = useAllPrograms();

  // Matches each testimonial's "program" label to the real program record so
  // it can link out, even if the label wording (e.g. "BizBridge Project")
  // doesn't exactly match the program's stored title (e.g. "BizBridge").
  const findMatchingProgram = (label) =>
    allPrograms.find(
      (p) =>
        p.title === label ||
        label.toLowerCase().includes(p.title.toLowerCase()) ||
        p.title.toLowerCase().includes(label.toLowerCase())
    );

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
          {testimonials.map((t, index) => {
            const matchedProgram = findMatchingProgram(t.program);
            return (
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
                  "{linkifyProgramNames(t.quote, allPrograms, null)}"
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
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
                      {matchedProgram ? (
                        <Link
                          to={`/programs/${matchedProgram.slug}`}
                          className="text-xs text-red-500 font-medium mt-0.5 hover:underline inline-block"
                        >
                          {t.program}
                        </Link>
                      ) : (
                        <p className="text-xs text-red-500 font-medium mt-0.5">
                          {t.program}
                        </p>
                      )}
                    </div>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.name} on LinkedIn`}
                      className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getProgramBySlug } from "../utils/program";
import { useAllPrograms } from "../hooks/useAllPrograms";
import { linkifyProgramNames } from "../utils/linkifyProgramNames";
import ProgramBadge from "../components/ProgramBadge";
import { useState } from "react";
import RegistrationModal from "../components/RegistrationModal";
import { FaLinkedin } from "react-icons/fa";

export default function ProgramDetails() {
  const { slug } = useParams();
  const { allPrograms, loading } = useAllPrograms();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  const program = getProgramBySlug(slug) || allPrograms.find((p) => p.slug === slug);

  if (!program) return <Navigate to="/programs" replace />;

  const Icon = program.icon;
  const otherPrograms = allPrograms.filter((p) => p.slug !== program.slug).slice(0, 3);
  const linkify = (text) => linkifyProgramNames(text, allPrograms, program.slug);

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/programs"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Programs
          </Link>

         <ProgramBadge program={program} size="lg" inverted />


          <div className="flex flex-wrap items-center gap-3">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              {program.category}
            </p>
            {program.linkedin && (
              <a
                href={program.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <FaLinkedin className="w-4 h-4" /> Follow on LinkedIn
              </a>
            )}
          </div>
          <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {program.title}
          </h1>
          {program.tagline && (
            <p className="mt-4 text-lg sm:text-xl text-white/70 italic">{program.tagline}</p>
          )}
          <p className="mt-5 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            {linkify(program.description)}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-14">
        {/* THE OPPORTUNITY */}
        {program.opportunity && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">The Opportunity</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{linkify(program.opportunity.intro)}</p>
            {program.opportunity.points?.length > 0 && (
              <ul className="mt-4 space-y-2.5">
                {program.opportunity.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    {linkify(point)}
                  </li>
                ))}
              </ul>
            )}
            {program.opportunity.closing && (
              <p className="mt-4 text-gray-600 leading-relaxed">{linkify(program.opportunity.closing)}</p>
            )}
          </section>
        )}

        {/* OUR APPROACH */}
        {program.approach && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Approach</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{linkify(program.approach.intro)}</p>
            {program.approach.points?.length > 0 && (
              <ul className="mt-4 space-y-2.5">
                {program.approach.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    {linkify(point)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* PATHWAY (SkillSet Lab specific) */}
        {program.pathway && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">A Clear Pathway Forward</h2>
            <div className="mt-5 space-y-4">
              {program.pathway.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{linkify(step.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHAT MAKES IT DIFFERENT */}
        {program.different && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              What Makes {program.title.split(" ")[0]} Different
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {program.different.map((item, i) => (
                <div key={i} className="p-4 sm:p-5 bg-red-50 rounded-xl border border-red-100">
                  <p className="font-semibold text-red-600 text-sm sm:text-base">{item.title}</p>
                  <p className="mt-1.5 text-sm text-gray-600">{linkify(item.text)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHO IT'S FOR */}
        {program.whoFor && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Who It's For</h2>
            <ul className="mt-4 space-y-2.5">
              {program.whoFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  {linkify(item)}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* WHAT PARTICIPANTS GAIN */}
        {program.gain && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">What Participants Gain</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{linkify(program.gain.intro)}</p>
            <ul className="mt-4 space-y-2.5">
              {program.gain.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {linkify(point)}
                </li>
              ))}
            </ul>
            {program.gain.closing && (
              <p className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg text-gray-700 text-sm sm:text-base font-medium">
                {linkify(program.gain.closing)}
              </p>
            )}
          </section>
        )}

        {/* PHASES (Venture Now specific) */}
        {program.phases && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">From Idea to Launch</h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {program.phases.map((phase, i) => (
                <div key={i} className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-2xl font-bold text-red-100">0{i + 1}</span>
                  <p className="mt-2 font-semibold text-gray-900 text-sm sm:text-base">{phase.title}</p>
                  <p className="mt-1.5 text-sm text-gray-600">{linkify(phase.text)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* THE IMPACT */}
        {program.impact && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">The Impact</h2>
            <ul className="mt-4 space-y-2.5">
              {program.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-base">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {linkify(item)}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* WHY IT MATTERS */}
        {program.whyMatters && (
          <section className="p-6 sm:p-8 bg-gray-900 text-white rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-bold">Why It Matters</h2>
            <p className="mt-4 text-white/80 leading-relaxed text-sm sm:text-base">
              {linkify(program.whyMatters)}
            </p>
          </section>
        )}
      </div>

      {/* GET INVOLVED CTA — always opens the registration modal */}
      {program.getInvolved && (
        <section className="bg-red-500 text-white py-14 sm:py-16 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Get Involved</h2>
            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
              {program.getInvolved}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-7 inline-flex items-center gap-2 bg-white text-red-500 px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-red-50 transition-colors"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* OTHER PROGRAMS */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Explore Other Programs</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherPrograms.map((p) => {
              const OtherIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to={`/programs/${p.slug}`}
                  className="group p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-red-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3 group-hover:bg-red-500 transition-colors">
                    <OtherIcon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                    {p.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL — available for every program */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programTitle={program.title}
      />
    </div>
  );
}
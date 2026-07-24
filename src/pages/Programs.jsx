import { useState } from "react";
import { Link } from "react-router-dom";
import { useAllPrograms } from "../hooks/useAllPrograms";
import { linkifyProgramNames } from "../utils/linkifyProgramNames";
import ProgramBadge from "../components/ProgramBadge";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/images/hero2.jpg";
import RegistrationModal from "../components/RegistrationModal";

const categories = ["All", "Entrepreneurship", "Skills Training & Development", "Youth Advocacy & Community"];

export default function Programs() {
  const [active, setActive] = useState("All");
  const { allPrograms, loading } = useAllPrograms();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    active === "All" ? allPrograms : allPrograms.filter((p) => p.category === active);

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section
        className="relative bg-gray-900 py-16 sm:py-20 border-b border-gray-100 text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Our Programs
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Co-creating opportunities with young people
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our programs are built around youth employability and advocacy—equipping
            young people with skills, experience, and platforms to lead change and
            build meaningful futures.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 sm:py-10 bg-gray-50 sticky top-0 z-10 backdrop-blur-sm bg-gray-50/90 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? allPrograms.length
                  : allPrograms.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                    active === cat
                      ? "bg-red-500 text-white border-red-500 shadow-sm shadow-red-200"
                      : "bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-500"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-1.5 ${
                      active === cat ? "text-red-100" : "text-gray-400"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <p className="text-center text-gray-400 py-12 text-sm">Loading programs...</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No programs found in this category yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((program) => {
                return (
                  <div
                    key={program.slug}
                    className="group flex flex-col border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-200 transition-all duration-300 bg-white"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <ProgramBadge program={program} size="md" />
                      {program.linkedin && (
                        <a
                          href={program.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${program.title} on LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-300 hover:text-blue-400 transition-all opacity-0 group-hover:opacity-100 shrink-0"
                        >
                          <FaLinkedin className="w-8 h-8" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      {program.category}
                    </p>

                    <h3 className="mt-2 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                      {linkifyProgramNames(program.description, allPrograms, program.slug)}
                    </p>

                    <Link
                      to={`/programs/${program.slug}`}
                      className="mt-5 text-sm font-medium text-red-500 hover:text-red-600 hover:gap-2 inline-flex items-center gap-1 transition-all w-fit"
                    >
                      Learn more
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* MINI CTA SECTION */}
      <section className="bg-gray-900 py-14 sm:py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Are you looking for a job?
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base">
            Register to join the waitlist.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-red-600 transition-colors"
            >
              Join Waitlist <ArrowRight size={18} />
            </button>
            <Link
              to="/programs/ghana-talent-bank"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programTitle="GTB"
      />
    </div>
  );
}
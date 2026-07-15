import { useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { supabase } from "../lib/src/lib/supabase";

export default function JobVacancy() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("job_vacancies")
        .select("*")
        .order("deadline", { ascending: true });

      if (!error) setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const isExpired = (deadline) => new Date(`${deadline}T23:59:59`) < new Date();

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="py-16 sm:py-20 text-center border-b border-gray-100 px-4">
        <p className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          Careers
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Job Vacancies
        </h1>
        <p className="mt-5 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore current openings with Innville Foundation and our partner
          organizations.
        </p>
      </section>

      {/* LISTINGS */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <p className="text-center text-gray-400 text-sm">Loading...</p>
          ) : jobs.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No open positions right now—check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {jobs.map((job) => {
                const expired = isExpired(job.deadline);
                return (
                  <div
                    key={job.id}
                    className={`bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 ${
                      expired ? "opacity-60" : "hover:shadow-xl hover:-translate-y-1 hover:border-red-100"
                    }`}
                  >
                    <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-100">
                      {job.image_url ? (
                        <img
                          src={job.image_url}
                          alt={`${job.title} flyer`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-red-50">
                          <Briefcase className="w-8 h-8 text-red-200" />
                        </div>
                      )}
                      {expired && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold uppercase tracking-wide bg-black/60 px-3 py-1 rounded-full">
                            Deadline passed
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      {job.company && (
                        <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
                      )}

                      <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>
                            Apply by{" "}
                            {new Date(`${job.deadline}T00:00:00`).toLocaleDateString(undefined, {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        {job.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span>{job.location}</span>
                          </div>
                        )}
                      </div>

                      {job.description && (
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                          {job.description}
                        </p>
                      )}

                      {expired ? (
                        <button
                          disabled
                          className="mt-4 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 text-sm font-medium px-4 py-2.5 rounded-lg cursor-not-allowed"
                        >
                          Applications closed
                        </button>
                      ) : (
                        <a
                          href={job.application_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors"
                        >
                          Apply Now <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
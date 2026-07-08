import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-red-500 text-white text-center overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-700/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Co-creators of the Future
        </h2>

        <p className="mt-4 sm:mt-5 text-white/90 text-sm sm:text-base leading-relaxed">
          We are building a future where young people lead with innovation,
          purpose, and impact—through{" "}
          <span className="font-semibold text-white">Youth Employability</span>{" "}
          and{" "}
          <span className="font-semibold text-white">Youth Advocacy</span>.
        </p>

        <p className="mt-3 sm:mt-4 text-white/75 text-sm sm:text-base leading-relaxed">
          At Innville Foundation, we co-create opportunities in
          entrepreneurship, skills development, internships, and
          advocacy—empowering young people to move from ambition to action.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-white text-red-500 px-6 py-3 rounded-md font-medium text-sm sm:text-base hover:bg-red-50 active:bg-red-100 transition-colors shadow-lg shadow-red-700/20"
          >
            Get Involved
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 border border-white/80 px-6 py-3 rounded-md text-sm sm:text-base hover:bg-white/10 active:bg-white/20 transition-colors"
          >
            Explore Programs
          </Link>

        </div>
      </div>
    </section>
  );
}
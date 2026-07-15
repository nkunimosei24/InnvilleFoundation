import { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";



export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-14 sm:py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Join the National Internship Program (NIP)
          </h3>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Build your job readiness now.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md text-sm font-medium transition-colors"
          >
            Join NIP
          </button>
          <Link
            to={`/programs/national-internship-program`}
            className="border border-white/40 hover:border-white hover:bg-white/10 px-5 py-3 rounded-md text-sm font-medium transition-colors text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programTitle="National Internship Program"
      />
    </section>
  );
}
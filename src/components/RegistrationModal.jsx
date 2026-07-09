import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/src/lib/supabase";

export default function RegistrationModal({ isOpen, onClose, programTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset state whenever the modal is closed/reopened for a different program
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMsg("");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }, [isOpen, programTitle]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    const { error } = await supabase.from("registrations").insert([
      {
        program_title: programTitle,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.error("Registration error:", error);
      setErrorMsg("Something went wrong submitting your registration. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              You're registered!
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Thanks for your interest in {programTitle}. Our team will reach
              out to you shortly with next steps.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between p-6 sm:p-7 pb-0">
              <div>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  Register
                </p>
                <h3 className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {programTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Anything you'd like us to know? (optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us a bit about yourself"
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
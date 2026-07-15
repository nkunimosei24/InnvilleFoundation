import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GraduationCap, Handshake, HeartHandshake, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/src/lib/supabase";

export default function Contact() {
  const location = useLocation();
  const initialReason = location.state?.reason || "Program Inquiry";

  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: initialReason,
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { error } = await supabase.from("contact_submissions").insert([form]);

    if (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } else {
      setStatus("sent");
      setForm({ name: "", email: "", reason: "Program Inquiry", message: "" });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="py-16 sm:py-20 text-center border-b border-gray-100 px-4">
        <p className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          Contact Us
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Let's Connect
        </h1>
        <p className="mt-5 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Whether you're interested in our programs, exploring partnerships,
          or simply want to learn more about Innville Foundation, we'd love to
          hear from you.
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12">
          {/* LEFT - INFO */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              We respond to all inquiries as soon as possible. Choose the
              reason for your message and we'll make sure it reaches the
              right team.
            </p>

            {/* INFO BOXES */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 p-4 sm:p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Programs</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Questions about youth programs, applications, or
                    participation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 sm:p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Partnerships</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Collaboration, sponsorships, and institutional
                    partnerships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 sm:p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Volunteering</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Opportunities to contribute your time, skills, or
                    expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* DIRECT CONTACT DETAILS */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>infor@innvillefoundation.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>+233 59 593 6713 / +233 54 781 5672.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>21 Jordan Street, Madina Estates</span>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm h-fit">
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-red-500 hover:text-red-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  Send a Message
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Reason for Contact
                    </label>
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-700 bg-white"
                    >
                      <option>Program Inquiry</option>
                      <option>Partnership / Sponsorship</option>
                      <option>Volunteer Interest</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                      placeholder="Tell us more about your message"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong sending your message. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-colors shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
  { to: "/admin/login", label: "Login" },
];

const focusAreas = [
  { label: "Skills Development", to: "/programs/skillset-lab" },
  { label: "Internship & Job Opportunities", to: "/programs/national-internship-program" },
  { label: "Policy Advocacy", to: "/programs/nye-summit" },
  { label: "Talent Mobility", to: "/programs/ghana-talent-bank" },
  { label: "Entrepreneurship", to: "/programs/venture-now" },
];

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/1FKeXuPXWU/?mibextid=wwXIfr", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/innvillefoundation?igsh=NWt1cmxmaGVrdWp2", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@innvilleofficial?_r=1&_t=ZS-97tH8r23htk", label: "TikTok" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/innville-foundation/", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white pt-14 sm:pt-16 pb-8 sm:pb-10 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* BRAND */}
          <div className="col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-red-500">
              Innville
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              A youth-centered organization that co-creates the future by
              supporting young people through our initiatives in youth
              employability and advocacy to help them lead change in their
              communities.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FOCUS AREAS — now links to their programs */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Focus Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {focusAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    to={area.to}
                    className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-400 transition-all duration-200" />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>21 Jordan Street, Madina Estates, Accra, Ghana</span>
              </div>
              <a
                href="mailto:innvillefoundation@gmail.com"
                className="flex items-center gap-2.5 hover:text-red-400 transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>infor@innvillefoundation.com</span>
              </a>
              <a href="tel:+233547815672 / +233 59 593 6713" className="flex items-center gap-2.5 hover:text-red-400 transition-colors w-fit">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>+233 59 593 6713 / +233 54 781 5672.</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Innville Foundation. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
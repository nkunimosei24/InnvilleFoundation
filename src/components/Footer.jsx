import { Link } from "react-router-dom";
import { Mail, MapPin, Phone,ArrowUp } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
];

const focusAreas = [
  "Youth Empowerment",
  "Community Development",
  "Innovation & Partnerships",
  "Skills Training",
];

// const socials = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
// ];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white pt-14 sm:pt-16 pb-8 sm:pb-10 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* BRAND */}
          <div className="col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-red-500">
              Innviile
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              A youth-centered organization co-creating the future with young
              people, communities, and partners to drive innovation and
              shared prosperity.
            </p>

            {/* SOCIAL LINKS */}
            {/* <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                 <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
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

          {/* IMPACT FOCUS */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Focus Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
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
                <span>Ghana</span>
              </div>
              <a href="mailto:hello@innviile.org" className="flex items-center gap-2.5 hover:text-red-400 transition-colors w-fit">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>innvillefoundation@gmail.com</span>
              </a>
               
                <a>
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>+233 XXX XXX XXX</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Innviile Foundation. All rights
            reserved.
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
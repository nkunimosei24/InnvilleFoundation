// src/components/Partners.jsx
import { motion } from "framer-motion";
import GHNlogo from "../assets/images/ghn.jpeg";
import winnebalogo from "../assets/images/win.jpeg";
import GYCElogo from "../assets/images/gcye.png";
import SEClogo from "../assets/images/sec.png";
import ISpaceLogo from "../assets/images/ispace.jpeg";
import GLAlogo from "../assets/images/GLA.jpeg";
import MWGlogo from "../assets/images/mwg.png";
import UNlogo from "../assets/images/sdsn.png";
import AUlogo from "../assets/images/eco.png";

const partners = [
  { name: "Ghana Hubs Network", logo: GHNlogo },
  { name: "University of Education Winneba", logo: winnebalogo },
  { name: "Ghana Chamber of Young Entrepreneurs (GYCE)", logo: GYCElogo },
  { name: "Social Enterprise Ghana", logo: SEClogo },
  { name: "ISpace Foundation", logo: ISpaceLogo },
  { name: "Ghana Library Authority", logo: GLAlogo },
  { name: "Mobile Web Ghana", logo: MWGlogo },
   {name: "Sustainable Development Solutions Network - Youth Initiative of the United Nations", logo: UNlogo },
    {name: "Economic Social & Cultural Council of The African Union (ECOSOCC - AU)", logo: AUlogo }
];

function PartnerTile({ partner }) {
  return (
    <div className="h-20 sm:h-24 w-40 sm:w-48 flex items-center justify-center bg-gray-50 rounded-xl opacity-70 hover:opacity-100 hover:bg-white hover:shadow-md transition-all duration-300 p-4 shrink-0 mx-2.5 sm:mx-3">
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-10 sm:max-h-12 max-w-full object-contain"
        />
      ) : (
        <span className="text-gray-400 text-xs sm:text-sm font-semibold text-center">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function Partners() {
  // Duplicate the list so the loop is seamless
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="py-14 sm:py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-widest">
          Trusted by Organizations Building the Future With Us
        </p>
      </div>

      {/* Full-bleed marquee track with edge fade */}
      <div className="relative mt-8 sm:mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="group overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ animationPlayState: "running" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {loopedPartners.map((partner, index) => (
              <PartnerTile key={index} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
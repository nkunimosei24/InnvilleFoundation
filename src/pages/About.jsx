import { Briefcase, Megaphone, Sparkles, Quote, Eye } from "lucide-react";
import employabilityImage from "../assets/images/2.jpg";
import advocacyImage from "../assets/images/8.jpg";
import philosophyImage from "../assets/images/13.jpg";
import hero2 from "../assets/images/hero2.jpg";

const items = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "To build a future where young people lead with innovation, purpose and impact, co-creating thriving communities and a better future.",
  },
  {
    icon: Sparkles,
    title: "Our Mission",
    text: "To empower young people by co-creating opportunities in entrepreneurship, skills training, internships and advocacy initiatives, enabling them to shape meaningful and sustainable change in their communities.",
  },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <video
  autoPlay
  muted
  loop
  playsInline
  poster="/images/hero-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover opacity-40 sm:block"
>
  <source src="/videos/VID1.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-gray-900/10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 text-center">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-xs sm:text-sm">
            About Innviile
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We believe the future is something we build together
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Innviile Foundation is a youth-centered organization that believes in
            co-creating the future with young people, communities, and partners.
            Through youth employability and advocacy initiatives, we empower young
            people to lead innovation, create opportunities, and drive meaningful
            change in their communities.
          </p>
        </div>
      </section>


<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Our Mission And Vision
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Empowering Young People to Shape the Future
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 text-5xl sm:text-6xl font-bold text-gray-50 select-none group-hover:text-red-50 transition-colors duration-300">
                  0{index + 1}
                </span>

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="relative mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="relative mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
      

      {/* PHILOSOPHY SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={philosophyImage}
                alt="Young entrepreneurs planning together"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-xl p-4 sm:p-5 shadow-xl border border-gray-100 max-w-[220px] sm:max-w-[240px]">
              <Quote className="w-5 h-5 text-red-500 mb-2" />
              <p className="text-sm text-gray-700 italic leading-snug">
                "Co-Creators of the Future."
              </p>
              <p className="mt-1.5 text-xs text-gray-400">
                Building the future with you.
              </p>
            </div>
          </div>
          

          {/* Text side */}
          <div className="order-1 md:order-2">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Our Philosophy
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
              Change starts with the actions we take today
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-600 leading-relaxed">
              At Innviile Foundation, we believe the future is shaped by the actions
              we take today. Rather than waiting for change, we work alongside young
              people, communities, and partners to intentionally create opportunities
              that lead to innovation, employment, and shared prosperity.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every initiative we design is built through collaboration because we
              believe young people are not just beneficiaries of development—they are
              leaders, innovators, and co-creators of the future.
            </p>

            <div className="mt-6 flex items-center gap-2 text-red-500">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Core Belief</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              What We Do
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
              Two pillars, one mission
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Everything we do is anchored on two strategic pillars that prepare
              young people for opportunity and empower them to shape the future.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Employability card with image */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-80 sm:h-96">
              <img
                src={employabilityImage}
                alt="Young professional working on a laptop"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-7 text-white">
                <div className="w-11 h-11 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Youth Employability
                </h3>
                <p className="mt-2 text-white/80 text-sm sm:text-base leading-relaxed">
                  Preparing young people for meaningful employment through
                  entrepreneurship, skills development, internships, and career
                  pathways that create sustainable livelihoods.
                </p>
              </div>
            </div>

            {/* Advocacy card with image */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-80 sm:h-96">
              <img
                src={advocacyImage}
                alt="Young people in a community discussion"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-7 text-white">
                <div className="w-11 h-11 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Youth Advocacy
                </h3>
                <p className="mt-2 text-white/80 text-sm sm:text-base leading-relaxed">
                  Amplifying youth voices through self-advocacy, policy engagement,
                  and platforms that enable young people to influence decisions and
                  lead change within their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Mission strip */}
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600 text-center sm:text-left">
              Co-Creating the Future
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base text-center sm:text-left max-w-3xl">
              Across every program, partnership, and initiative, our mission
              remains the same—to bridge the gap between ambition and
              opportunity, enabling young people to access meaningful
              employment, build sustainable enterprises, and create lasting
              social and economic impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
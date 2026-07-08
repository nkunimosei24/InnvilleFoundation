// src/components/UpcomingEvents.jsx
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import hangoutImage from "../assets/images/hangout.jpeg";
import skillsetImage from "../assets/images/skill1.jpg";
import startupSeriesImage from "../assets/images/startup1.jpg";
import nyeSummitImage from "../assets/images/nye1.jpg";

const events = [
  {
    title: "Co-Creators Hangout",
    date: "July 26, 2026",
    time: "4:00 PM",
    location: "Accra, Ghana",
    category: "Community",
    program: "co-creators-hangout",
    image: hangoutImage,
  },
  {
    title: "SkillSet Lab Training",
    date: "August 4, 2026",
    time: "9:00 AM",
    location: "Accra, Ghana",
    category: "Youth Employability",
    program: "skillset-lab",
    image: skillsetImage,
  },
  {
    title: "Startup Series: Episode 4",
    date: "August 9, 2026",
    time: "10:00 AM",
    location: "Virtual",
    category: "Youth Employability",
    program: "startup-series",
    image: startupSeriesImage,
  },
  {
    title: "National Youth Employment Summit",
    date: "September 12, 2026",
    time: "9:00 AM",
    location: "Accra, Ghana",
    category: "Youth Advocacy & Community",
    program: "nye-summit",
    image: nyeSummitImage,
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            What's Next
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Join our programs, sessions, and community gatherings happening soon.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {events.map((event, index) => {
            const [month, day] = event.date.split(" ");
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 flex flex-col"
              >
                {/* Image with floating date badge */}
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />

                  <div className="absolute top-3 left-3 bg-white rounded-lg px-2.5 py-1.5 flex flex-col items-center leading-none shadow-md">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-red-500">
                      {month}
                    </span>
                    <span className="text-base font-bold text-gray-900 mt-0.5">
                      {day.replace(",", "")}
                    </span>
                  </div>

                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                    {event.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Link
                    to={`/programs/${event.program}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors"
                  >
                    <Ticket className="w-4 h-4" />
                    View Event
                  </Link>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
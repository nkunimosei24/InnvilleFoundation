import { useEffect, useState } from "react";
import { Calendar, MapPin, Ticket, Newspaper, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/src/lib/supabase";

const TABS = [
  { key: "events", label: "Events" },
  { key: "news", label: "News" },
];

export default function UpcomingEvents() {
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const today = new Date().toISOString().split("T")[0];

      // Rows created before the News feature existed won't have a post_type
      // set, so treat null as "event" to keep them showing up as events.
      const [eventsRes, newsRes] = await Promise.all([
        supabase
          .from("events")
          .select("*")
          .or("post_type.eq.event,post_type.is.null")
          .gte("event_date", today)
          .order("event_date", { ascending: true })
          .limit(4),
        supabase
          .from("events")
          .select("*")
          .eq("post_type", "news")
          .order("event_date", { ascending: false })
          .limit(4),
      ]);

      if (!eventsRes.error) setEvents(eventsRes.data);
      if (!newsRes.error) setNews(newsRes.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const rows = activeTab === "events" ? events : news;

  if (!loading && events.length === 0 && news.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            What's Next
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Events & News
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Join our programs, sessions, and community gatherings—and catch up on the latest from Innville.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-8 flex justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-red-500 text-white border-red-500 shadow-sm shadow-red-200"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="mt-10 text-center text-gray-400 text-sm">Loading...</p>
        ) : rows.length === 0 ? (
          <p className="mt-10 text-center text-gray-500 text-sm">
            {activeTab === "events" ? "No upcoming events yet—check back soon." : "No news posted yet—check back soon."}
          </p>
        ) : activeTab === "events" ? (
          <EventsGrid events={rows} />
        ) : (
          <NewsGrid posts={rows} />
        )}
      </div>
    </section>
  );
}

/* ---------------- EVENTS (image-first, ticket-style CTA) ---------------- */

function EventsGrid({ events }) {
  return (
    <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {events.map((event) => {
        const dateObj = new Date(`${event.event_date}T00:00:00`);
        const month = dateObj.toLocaleString(undefined, { month: "short" }).toUpperCase();
        const day = dateObj.getDate();

        return (
          <div
            key={event.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-36 sm:h-40 overflow-hidden bg-gray-100">
              {event.image_url ? (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-red-50">
                  <Calendar className="w-8 h-8 text-red-200" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />

              <div className="absolute top-3 left-3 bg-white rounded-lg px-2.5 py-1.5 flex flex-col items-center leading-none shadow-md">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-red-500">
                  {month}
                </span>
                <span className="text-base font-bold text-gray-900 mt-0.5">{day}</span>
              </div>

              {event.category && (
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {event.category}
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                {event.title}
              </h3>

              <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>
                    {dateObj.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
                    {event.event_time && ` · ${event.event_time}`}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>

              {event.program_slug ? (
                <Link
                  to={`/programs/${event.program_slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors"
                >
                  <Ticket className="w-4 h-4" />
                  View Event
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors"
                >
                  <Ticket className="w-4 h-4" />
                  Learn More
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- NEWS (text-first, tag chip, link-style CTA) ---------------- */

function NewsGrid({ posts }) {
  return (
    <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {posts.map((post) => {
        const dateObj = new Date(`${post.event_date}T00:00:00`);
        const formattedDate = dateObj.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        // Prefer a real external source; fall back to a linked program page;
        // otherwise there's simply no CTA (better than sending people to /contact
        // for something they can't actually act on).
        const href = post.source_url || (post.program_slug ? `/programs/${post.program_slug}` : null);
        const isExternal = Boolean(post.source_url);

        return (
          <div
            key={post.id}
            className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col p-5 sm:p-6"
          >
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
            )}

            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                <Newspaper className="w-3 h-3" />
                {post.tag || "Update"}
              </span>
              <span className="text-xs text-gray-400">{formattedDate}</span>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
              {post.title}
            </h3>

            {post.content && (
              <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                {post.content}
              </p>
            )}

            {href && (
              isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit"
                >
                  Read more <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link
                  to={href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
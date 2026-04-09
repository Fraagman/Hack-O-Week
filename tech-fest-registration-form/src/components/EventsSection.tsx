import { events } from "../data/events";

export default function EventsSection() {
  return (
    <section id="events" className="py-16 px-4 bg-blue-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold mb-4">
            🎯 10+ Events • ₹4.7L Prize Pool
          </div>
          <h2 className="text-4xl font-bold mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-cyan-200/70 max-w-2xl mx-auto">
            Compete in hackathons, robotics, AI/ML, and more. Participate in multiple events!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{event.icon}</div>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-bold">
                  {event.prize}
                </span>
              </div>
              <h3 className="font-bold text-xl text-white mb-2">{event.name}</h3>
              <span className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs font-semibold mb-3">
                {event.category}
              </span>
              <p className="text-cyan-200/60 text-sm leading-relaxed mb-4">
                {event.description}
              </p>
              <div className="space-y-2 text-xs text-cyan-200/50">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{event.date}, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>{event.teamSize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-2xl font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105"
          >
            Register for Events →
          </a>
        </div>
      </div>
    </section>
  );
}

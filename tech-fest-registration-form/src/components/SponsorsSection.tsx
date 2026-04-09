export default function SponsorsSection() {
  const sponsors = [
    { name: "TCS", tier: "Title Sponsor", color: "text-orange-400" },
    { name: "Infosys", tier: "Co-Sponsor", color: "text-purple-400" },
    { name: "Persistent Systems", tier: "Gold Sponsor", color: "text-yellow-400" },
    { name: "L&T Infotech", tier: "Gold Sponsor", color: "text-yellow-400" },
    { name: "Bajaj Finserv", tier: "Silver Sponsor", color: "text-gray-300" },
    { name: "RTMNU", tier: "Academic Partner", color: "text-blue-400" },
    { name: "Coding Ninjas", tier: "Platform Partner", color: "text-green-400" },
    { name: "GeeksforGeeks", tier: "Knowledge Partner", color: "text-green-400" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-yellow-500/15 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium mb-4">
            🤝 Our Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Sponsors &{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            TechNova 2025 is proudly supported by leading tech companies and institutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`text-lg font-bold ${s.color} mb-1`}>{s.name}</div>
              <div className="text-xs text-gray-500">{s.tier}</div>
            </div>
          ))}
        </div>

        {/* Map / Venue info */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">📍 How to Reach VNIT Nagpur</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚂</span>
                  <div>
                    <div className="font-medium text-white">By Train</div>
                    <p>Nagpur Junction (NGP) — 7 km from VNIT. Take Auto (₹80) or Ola/Uber (₹120). 
                    Direct trains from Mumbai, Delhi, Hyderabad, Pune, Bhopal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✈️</span>
                  <div>
                    <div className="font-medium text-white">By Air</div>
                    <p>Dr. Babasaheb Ambedkar International Airport (NAG) — 9 km. 
                    Direct flights from Delhi, Mumbai, Bangalore, Hyderabad, Kolkata.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚌</span>
                  <div>
                    <div className="font-medium text-white">By Bus</div>
                    <p>MSRTC Bus Stand, Ganeshpeth — 5 km from VNIT. 
                    Regular buses from Pune, Mumbai, Aurangabad, Amravati, Wardha.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <div className="font-medium text-white">VNIT Address</div>
                    <p className="text-white">
                      South Ambazari Road, Abhyankar Nagar,<br />
                      Nagpur, Maharashtra — 440010
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">🗓️ 3-Day Schedule Overview</h3>
              <div className="space-y-3">
                {[
                  {
                    day: "Day 1 — Feb 14 (Friday)",
                    items: ["Inauguration & Keynote (10 AM)", "Hackathon 36 Begins", "CTF Round 1", "E-Sports Qualifiers", "Opening Night Concert"],
                  },
                  {
                    day: "Day 2 — Feb 15 (Saturday)",
                    items: ["RoboWars Arena", "Web Dev Sprint", "TechQuiz Finals", "E-Sports Semifinals", "Hackathon Continues"],
                  },
                  {
                    day: "Day 3 — Feb 16 (Sunday)",
                    items: ["AI/ML Challenge", "Drone Racing", "IoT Workshop", "Startup Pitch", "Valedictory & Prize Distribution (5 PM)"],
                  },
                ].map((d) => (
                  <div key={d.day} className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-sm font-semibold text-orange-400 mb-2">{d.day}</div>
                    <ul className="space-y-1">
                      {d.items.map((item) => (
                        <li key={item} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

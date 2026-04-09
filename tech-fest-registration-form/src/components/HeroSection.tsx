export default function HeroSection() {
  return (
    <section className="py-20 px-4 text-center relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Registrations Live • 342 Spots Left
        </div>

        <h1 className="text-6xl sm:text-7xl font-black leading-tight mb-6">
          <span className="block text-white mb-2">Welcome to</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
            TechNova 2025
          </span>
        </h1>

        <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-4 leading-relaxed">
          Central India's biggest tech festival at{" "}
          <span className="text-cyan-300 font-bold">VNIT Nagpur</span>
        </p>
        <p className="text-cyan-200/60 mb-10">
          📅 February 14-16, 2025 • 📍 VNIT Campus, Nagpur
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#register"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-2xl font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105"
          >
            Register Now • ₹299
          </a>
          <a
            href="#events"
            className="px-8 py-4 bg-white/10 border-2 border-cyan-400/30 hover:bg-white/20 rounded-2xl font-bold text-white transition-all"
          >
            View Events
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "10+", label: "Events" },
            { value: "3,500+", label: "Participants" },
            { value: "₹4.7L", label: "Prize Pool" },
            { value: "3", label: "Days" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all hover:scale-105"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-cyan-200/60 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import SuccessScreen from "./components/SuccessScreen";
import HeroSection from "./components/HeroSection";
import EventsSection from "./components/EventsSection";
import SponsorsSection from "./components/SponsorsSection";
import type { FormData } from "./types";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
    setSubmittedData(data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-teal-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-blue-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/30">
              TN
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                TechNova 2025
              </h1>
              <p className="text-xs text-cyan-400">VNIT Nagpur</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-cyan-200 hover:text-white transition-colors">About</a>
            <a href="#events" className="text-cyan-200 hover:text-white transition-colors">Events</a>
            <a href="#register" className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg">
              Register Now
            </a>
          </div>
          <a
            href="#register"
            className="sm:hidden px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-sm font-semibold"
          >
            Register
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {submitted && submittedData ? (
          <SuccessScreen data={submittedData} onReset={handleReset} />
        ) : (
          <>
            <HeroSection />
            <EventsSection />
            <section id="register" className="py-16 px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <div className="inline-block px-5 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold mb-4">
                    📝 Registration Open • Limited Seats
                  </div>
                  <h2 className="text-4xl font-bold mb-3">
                    Register for{" "}
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      TechNova 2025
                    </span>
                  </h2>
                  <p className="text-cyan-200 max-w-md mx-auto">
                    Secure your spot at Central India's biggest tech fest. Registration fee: <span className="text-cyan-300 font-bold">₹299</span>
                  </p>
                </div>
                <RegistrationForm onSubmit={handleSubmit} />
              </div>
            </section>
            <SponsorsSection />
          </>
        )}
      </main>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-cyan-500/20 bg-blue-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  TN
                </div>
                <div>
                  <div className="font-bold text-white">TechNova 2025</div>
                  <div className="text-xs text-cyan-400">VNIT Nagpur</div>
                </div>
              </div>
              <p className="text-sm text-cyan-200/60 leading-relaxed">
                Central India's largest inter-college technical festival.
              </p>
            </div>

            {/* Venue */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">📍 Venue</h4>
              <p className="text-sm text-cyan-200/60 leading-relaxed">
                VNIT Nagpur<br />
                South Ambazari Road<br />
                Nagpur, Maharashtra<br />
                440010, India
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">📞 Contact</h4>
              <div className="space-y-2 text-sm text-cyan-200/60">
                <p>📧 technova@vnit.ac.in</p>
                <p>📱 +91 97640 83521</p>
                <p>📱 +91 88057 24163</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">🔗 Links</h4>
              <div className="space-y-2 text-sm text-cyan-200/60">
                <a href="#events" className="block hover:text-cyan-300 transition-colors">Events</a>
                <a href="#register" className="block hover:text-cyan-300 transition-colors">Register</a>
                <p>@technovavnit</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-cyan-500/10 text-center text-sm text-cyan-200/40">
            <p>© 2025 TechNova • VNIT Nagpur • All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

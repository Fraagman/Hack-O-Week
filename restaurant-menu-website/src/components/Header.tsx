import { MapPin, Clock, Phone, Star, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-teal-600 text-white">
      {/* Main header content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-semibold">Since 2005 • Nagpur</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold mb-3">
          Zaika Restaurant
        </h1>
        
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-6">
          Authentic Saoji flavours & Maharashtrian cuisine
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            Dharampeth, Nagpur
          </span>
          <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <Phone className="w-4 h-4" />
            +91 712 254 8899
          </span>
          <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            12 PM - 11 PM
          </span>
        </div>
      </div>
    </header>
  );
}

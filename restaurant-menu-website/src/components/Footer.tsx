import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { tagInfo } from "../data/menu";

export default function Footer() {
  return (
    <footer className="bg-espresso text-warm-300">
      {/* Veg / Non-Veg Legend + Dietary Guide */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-10">
          {/* Veg/Non-Veg indicator legend */}
          <h3 className="font-display text-lg font-semibold text-white text-center mb-6">
            Menu Guide
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="veg-indicator veg" />
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="veg-indicator nonveg" />
              <span>Non-Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="veg-indicator egg" />
              <span>Contains Egg</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {Object.entries(tagInfo).map(([key, info]) => (
              <div key={key} className="flex items-center gap-2 text-sm">
                <span className={`menu-tag ${info.color}`}>{info.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-warm-500 text-xs mt-6 max-w-lg mx-auto leading-relaxed">
            Please inform your server of any allergies or dietary restrictions.
            All prices are inclusive of GST. A service charge of 5% will be
            added to your bill. We use cold-pressed mustard oil & desi ghee in
            our preparations.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="text-center md:text-left">
            <p className="font-accent text-gold-light text-sm tracking-[0.2em] uppercase mb-1">
              Since 2005
            </p>
            <h2 className="font-display text-3xl font-bold text-white mb-1">
              Zaika
            </h2>
            <p className="font-accent text-gold text-base italic mb-3">
              The Taste of Nagpur
            </p>
            <p className="font-accent text-warm-400 italic text-sm leading-relaxed">
              Where every meal celebrates Nagpur's rich culinary heritage — from
              the fiery Saoji masala to the sweetness of Santra Barfi, every dish
              tells a story.
            </p>
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <a
                href="https://instagram.com/zaikanagpur"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/zaikanagpur"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919823456789"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:dine@zaikanagpur.in"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div className="text-center">
            <h3 className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-white mb-4">
              <Clock className="w-4 h-4 text-gold" />
              Opening Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between max-w-[260px] mx-auto">
                <span>Monday</span>
                <span className="text-warm-200">12:00 – 3:30 PM, 7:00 – 11:00 PM</span>
              </div>
              <div className="flex justify-between max-w-[260px] mx-auto">
                <span className="text-indian-red font-medium">Tuesday</span>
                <span className="text-indian-red font-medium">Closed</span>
              </div>
              <div className="flex justify-between max-w-[260px] mx-auto">
                <span>Wed – Friday</span>
                <span className="text-warm-200">12:00 – 3:30 PM, 7:00 – 11:00 PM</span>
              </div>
              <div className="flex justify-between max-w-[260px] mx-auto">
                <span>Sat – Sunday</span>
                <span className="text-warm-200">12:00 – 3:30 PM, 7:00 – 11:30 PM</span>
              </div>
              <div className="pt-2 border-t border-white/10 max-w-[260px] mx-auto mt-3">
                <p className="text-warm-400 text-xs italic">
                  Last order 30 min before closing
                </p>
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div className="text-center md:text-right">
            <h3 className="flex items-center justify-center md:justify-end gap-2 font-display text-lg font-semibold text-white mb-4">
              <MapPin className="w-4 h-4 text-gold" />
              Visit Us
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                Plot No. 15, Near Variety Square
                <br />
                Dharampeth, Nagpur – 440010
                <br />
                Maharashtra, India
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <a href="tel:+917122548899" className="hover:text-gold transition-colors">+91 712 254 8899</a>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-gold" />
                <a href="https://wa.me/919823456789" className="hover:text-gold transition-colors">+91 98234 56789 (WhatsApp)</a>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-gold" />
                <a href="mailto:dine@zaikanagpur.in" className="hover:text-gold transition-colors">dine@zaikanagpur.in</a>
              </p>
            </div>
            <div className="mt-5 space-y-2">
              <a
                href="tel:+917122548899"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-espresso px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Licence info bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] text-warm-500 tracking-wide">
          <span>FSSAI Lic. No.: 11521027000789</span>
          <span>•</span>
          <span>GSTIN: 27AABCZ5678F1Z5</span>
          <span>•</span>
          <span>Trade Licence: NMC/TL/2024/04521</span>
        </div>
      </div>

      {/* Available on platforms */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap items-center justify-center gap-4 text-xs text-warm-500">
          <span>Also order on:</span>
          <span className="bg-white/10 px-3 py-1 rounded-full text-warm-300 font-medium">🍽️ Zomato</span>
          <span className="bg-white/10 px-3 py-1 rounded-full text-warm-300 font-medium">🛵 Swiggy</span>
          <span className="bg-white/10 px-3 py-1 rounded-full text-warm-300 font-medium">📱 EatSure</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-warm-500">
          <p>© {new Date().getFullYear()} Zaika — The Taste of Nagpur. All rights reserved.</p>
          <p className="font-accent italic text-sm text-warm-400">
            "अतिथि देवो भव" — Guest is God
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import {
  Leaf,
  UtensilsCrossed,
  Flame,
  Salad,
  Cake,
  Wine,
} from "lucide-react";
import { cn } from "../utils/cn";
import { menuData } from "../data/menu";

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  UtensilsCrossed,
  Flame,
  Salad,
  Cake,
  Wine,
};

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map((cat) => ({
        id: cat.id,
        el: document.getElementById(cat.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveCategory(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center overflow-x-auto gap-2 py-3 sm:justify-center">
          {menuData.map((category) => {
            const Icon = iconMap[category.icon];
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-100"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

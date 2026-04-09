import { useEffect, useRef } from "react";
import {
  Leaf,
  UtensilsCrossed,
  Flame,
  Salad,
  Cake,
  Wine,
} from "lucide-react";
import type { MenuCategory } from "../data/menu";
import MenuItem from "./MenuItem";

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  UtensilsCrossed,
  Flame,
  Salad,
  Cake,
  Wine,
};

interface Props {
  category: MenuCategory;
  index: number;
}

export default function MenuSection({ category, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      const animatedEls = el.querySelectorAll(".fade-in-up");
      animatedEls.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  const Icon = iconMap[category.icon];
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      ref={sectionRef}
      className={`py-16 sm:py-20 ${isEven ? "bg-cream" : "bg-parchment"}`}
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Section header */}
        <div className="text-center mb-12 fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-warm-100 mb-5">
            {Icon && <Icon className="w-6 h-6 text-warm-600" />}
          </div>

          {/* Title with decorative elements */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-3">
            {category.title}
          </h2>
          <div className="menu-divider max-w-xs mx-auto mb-3">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="font-accent text-warm-500 text-lg italic">
            {category.subtitle}
          </p>
        </div>

        {/* Menu items */}
        <div className="space-y-2">
          {category.items.map((item, itemIndex) => (
            <div key={item.name} className="fade-in-up">
              <MenuItem item={item} index={itemIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

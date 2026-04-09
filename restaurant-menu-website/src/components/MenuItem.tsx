import { Award } from "lucide-react";
import { cn } from "../utils/cn";
import type { MenuItem as MenuItemType } from "../data/menu";
import { tagInfo } from "../data/menu";

interface Props {
  item: MenuItemType;
  index: number;
}

export default function MenuItem({ item, index }: Props) {
  return (
    <div
      className={cn(
        "group relative p-5 sm:p-6 rounded-xl transition-all duration-300",
        "hover:bg-white hover:shadow-lg hover:shadow-warm-200/50",
        item.featured
          ? "bg-white shadow-md border border-gold/20 ring-1 ring-gold/10"
          : "bg-transparent"
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Featured badge */}
      {item.featured && (
        <div className="absolute -top-2.5 right-4 sm:right-6">
          <div className="flex items-center gap-1 bg-gradient-to-r from-gold to-gold-light text-espresso text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            <Award className="w-3 h-3" />
            Chef's Selection
          </div>
        </div>
      )}

      <div className="flex justify-between items-start gap-4">
        {/* Item info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            {/* Veg / Non-Veg / Egg indicator - Indian standard */}
            <span
              className={cn("veg-indicator", item.type)}
              title={
                item.type === "veg"
                  ? "Vegetarian"
                  : item.type === "egg"
                  ? "Contains Egg"
                  : "Non-Vegetarian"
              }
            />
            <h3
              className={cn(
                "font-display text-lg sm:text-xl font-semibold text-espresso",
                "group-hover:text-burgundy transition-colors duration-200"
              )}
            >
              {item.name}
            </h3>
          </div>

          <p className="text-warm-500 text-sm leading-relaxed mb-3 max-w-lg pl-6">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-6">
              {item.tags.map((tag) => {
                const info = tagInfo[tag];
                if (!info) return null;
                return (
                  <span
                    key={tag}
                    className={cn("menu-tag", info.color)}
                    title={info.label}
                  >
                    {info.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Price in Rupees */}
        <div className="flex flex-col items-end flex-shrink-0 pt-1">
          <span
            className={cn(
              "font-display text-xl sm:text-2xl font-bold",
              item.featured ? "text-burgundy" : "text-espresso"
            )}
          >
            ₹{item.price}
          </span>
        </div>
      </div>

      {/* Decorative line on featured items */}
      {item.featured && (
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      )}
    </div>
  );
}

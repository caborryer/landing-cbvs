import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

interface ElasticGalleryProps {
  items: GalleryItem[];
  className?: string;
}

export function ElasticGallery({ items, className }: ElasticGalleryProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  return (
    <div className={cn("w-full", className)}>
      {/* Outer Double-Bezel shell */}
      <div className="rounded-3xl border border-white/6 bg-white/3 p-1.5"
        style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)" }}>
        <div
          className="flex flex-col md:flex-row gap-1.5 rounded-[calc(1.5rem-6px)] overflow-hidden"
          style={{ height: "clamp(380px, 52vw, 620px)" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "relative cursor-pointer overflow-hidden",
                // Accordion flex transition
                "transition-[flex,filter] duration-700",
                activeId === item.id ? "flex-[4]" : "flex-[1]",
                activeId === item.id ? "brightness-100" : "brightness-50 hover:brightness-75",
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.25,1,0.5,1)" }}
            >
              {/* Background image */}
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-1000",
                  activeId === item.id ? "scale-100" : "scale-110"
                )}
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500",
                  activeId === item.id ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Active content */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-5 md:p-8 flex flex-col gap-2 transition-all duration-500",
                  activeId === item.id
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-10 opacity-0"
                )}
              >
                <span
                  className="self-start rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-2xl md:text-4xl font-bold uppercase leading-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <div
                  className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/60 mt-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Ver detalle <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Inactive vertical label */}
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-500",
                  activeId === item.id ? "opacity-0 scale-75" : "opacity-100 delay-300"
                )}
              >
                <span
                  className="hidden md:block text-xs font-bold uppercase tracking-[0.3em] text-white/70 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-sans)",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.title}
                </span>
                <span className="md:hidden text-xs font-bold text-white/70" style={{ fontFamily: "var(--font-sans)" }}>
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

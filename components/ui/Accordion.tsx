"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-border rounded-lg overflow-hidden bg-surface"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors"
          >
            <span className="font-medium text-text-primary">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-text-secondary transition-transform duration-200",
                openItem === item.id && "transform rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openItem === item.id ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-6 py-4 text-text-secondary border-t border-border">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

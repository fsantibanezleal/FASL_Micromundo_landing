import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "../data/siteData";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="accordion__item" key={item.question} data-reveal>
            <button
              type="button"
              className="accordion__trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <div className={`accordion__panel ${isOpen ? "is-open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

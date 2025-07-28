import React, { useState } from "react";

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 border-dashed">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 font-semibold flex justify-between items-center"
      >
        <span dangerouslySetInnerHTML={{ __html: title ||"" }} />

       
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && <div className="pb-4 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: content ||"" }}></div>}
    </div>
  );
};

export default function Accordion({ items }: { items: { title: string; content: string }[] }) {
  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

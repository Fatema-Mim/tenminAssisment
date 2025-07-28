"use client";
import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import Accordion from "./ui/Accordion";
import { FAQSection } from "@/interface/interface";

interface FaqProps {
  faq?: FAQSection | null;
}


export default function Faq({ faq }: FaqProps) {
  const [showAll, setShowAll] = useState(false);

  const values = faq?.values ?? [];
  const visibleItems = showAll ? values : values.slice(0, 5);
  const hasMore = values.length > 5;

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div id= "faq-section">
      <SectionTitle>{faq?.sectionName}</SectionTitle>
      <div className="relative mb-20">
        <CardWrapper>
          {faq && (
            <Accordion
              items={visibleItems.map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          )}
        </CardWrapper>

        {hasMore && (
          <button
            onClick={toggleShow}
            className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
          >
            {showAll ? "কম দেখুন" : "সকল কন্টেন্ট দেখুন"}

            {showAll ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

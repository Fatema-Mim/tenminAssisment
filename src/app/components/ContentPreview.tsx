"use client";
import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import Accordion from "./ui/Accordion";
import { Section } from "@/interface/interface";

interface ContentPreviewProps{
  contentPreview: Section | null;
}

const data = [
  {
    title: "Introduction",
    content: "Welcome to the course! Here's what you’ll learn.",
  },
  {
    title: "IELTS Support Group",
    content: "Exclusive Support Group প্রাপ্তিতে জয়েন করার নিয়মাবলী",
  },
  {
    title: "Academic Reading",
    content: "Learn academic reading strategies and practice sets.",
  },
  {
    title: "Reading Mock Test",
    content: "Here are some mock tests to help you prepare.",
  },
  { title: "Listening", content: "Listening practice materials and tips." },
  {
    title: "Speaking",
    content: "Tips and strategies for IELTS speaking section.",
  },
  {
    title: "Writing",
    content: "Detailed breakdown of academic writing tasks.",
  },
];

export default function ContentPreview({contentPreview}: ContentPreviewProps) {
  console.log(contentPreview)

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? data : data.slice(0, 5);
  const hasMore = data.length > 5;

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div>
      <SectionTitle>{contentPreview?.name }</SectionTitle>
      <div className="relative mb-20">
        <CardWrapper>
          <Accordion items={visibleItems} />
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

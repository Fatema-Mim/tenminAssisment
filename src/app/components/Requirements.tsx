import React from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import { Section } from "@/interface/interface";


interface RequirementsProps {
  requirements: Section | null;
 }

export default function Requirements({requirements}:RequirementsProps) {
  return (
    <div className="mb-7">
      <SectionTitle>{requirements?.name}</SectionTitle>
      <CardWrapper>
        <ul>
          <li className="flex items-start gap-2 mb-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-[#6294F8]"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h3>
          </li>
          <li className="flex items-start gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-[#6294F8]"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3>স্মার্টফোন অথবা পিসি</h3>
          </li>
        </ul>
      </CardWrapper>
    </div>
  );
}

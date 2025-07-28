import React from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import { PointersSection } from "@/interface/interface";

interface PointersProps {
  pointers: PointersSection;
}
export default function Pointers({ pointers }: PointersProps) {
  return (
    <div className="mb-6 md:mb-10 py-2 bg-white md:py-0" id= "outcome-section">
      <SectionTitle>{pointers?.sectionName}</SectionTitle>
      <CardWrapper>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
          {pointers?.values?.map((pointer, index) => {
            return (
              <li key={pointer.id} className="flex items-start gap-2 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="mr-1 mt-[2px]"
                  style={{ color: "#6294F8" }}
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1">{pointer?.text}</div>
              </li>
            );
          })}
        </ul>
      </CardWrapper>
    </div>
  );
}

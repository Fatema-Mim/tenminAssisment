import React from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import {  CourseFeaturesSection } from "@/interface/interface";

interface FeaturesProps {
  features?: CourseFeaturesSection | null;
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div id="structure-section">
      <SectionTitle>{features?.sectionName}</SectionTitle>
      <CardWrapper className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {features?.values?.map((feature, index) => (
          <div key={index} className="flex flex-row items-start gap-3 m-1 ">
            <div>
              <div
                className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: 0, opacity: "1" }}
              >
                <img
                  alt="play"
                  loading="lazy"
                  width="36"
                  height="36"
                  src={feature?.icon}
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
              {feature?.title}
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                {feature?.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </CardWrapper>
    </div>
  );
}

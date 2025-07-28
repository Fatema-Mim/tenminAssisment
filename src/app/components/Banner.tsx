import React from "react";
import CourseHeader from "./CourseHeader";
import InstructorCard from "./InstructorCard";
import { BasicInfo, ChecklistItem, CTA, MediaItem, Statistics } from "@/interface/interface";

interface BannerProps {
  basicInfo?: BasicInfo;
  media?: MediaItem[];
  cta?:CTA;
  statistics?:Statistics[]
}

export default function Banner({basicInfo,media,cta,statistics} : BannerProps ) {
  return (
   <>
    <div
      className="min-h-[300px] md:min-h-[300px] bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")'
      }}
    >
      
      <div className="container w-full mx-auto px-0 md:px-9 relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <CourseHeader basicInfo = {basicInfo} media = {media}/>
          <InstructorCard  media = {media} cta={cta} statistics={statistics} />
      </div>
    </div>
   
   </>
  );
}

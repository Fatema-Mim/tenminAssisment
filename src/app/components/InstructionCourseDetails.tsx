import React from "react";
import CoursePrice from "./ui/CoursePrice";
import CourseCheckList from "./ui/CourseCheckList";
import { CTA, Statistics } from "@/interface/interface";

interface MediaProps {
  cta?: CTA;
  statistics?: Statistics[];
}

export default function InstructionCourseDetails({
  cta,
  statistics,
}: MediaProps) {
  return (
    <div>
      <CoursePrice cta={cta} />
      <CourseCheckList statistics={statistics} />
    </div>
  );
}

import React from "react";
import bg from "@/app/assets/10mslogo.svg";
import Image from "next/image";
import Button from "./ui/Button";
import ThirdTitle from "./ui/ThirdTitle";
import CourseFactItem from "./ui/CourseFactItem";
import InstructionDemo from "./ui/InstructionDemo";
import CoursePrice from "./ui/CoursePrice";
import CourseCheckList from "./ui/CourseCheckList";
import MoreAboutCourse from "./ui/MoreAboutCourse";
import {  CTA, MediaItem, Statistics } from "@/interface/interface";
import InstructionCourseDetails from "./InstructionCourseDetails";

interface MediaProps {
  media?: MediaItem[];
  cta?:CTA
  statistics?:Statistics[]
}


export default function InstructorCard({media ,cta,statistics}: MediaProps) {
  return (
    <div className="hidden md:block w-full md:max-w-[330px] lg:max-w-[400px] bg-white md:absolute right-9 z-10">
      <div className="md:border border-gray-200">
        <InstructionDemo media={media} />
        <InstructionCourseDetails cta={cta} statistics={statistics} />
      </div>
      <MoreAboutCourse />
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import CoursePrice from "./ui/CoursePrice";
import CourseCheckList from "./ui/CourseCheckList";
import MoreAboutCourse from "./ui/MoreAboutCourse";
import { CTA, Statistics } from "@/interface/interface";
import InstructionCourseDetails from "./InstructionCourseDetails";

interface BannerProps {
  cta?: CTA;
  statistics?: Statistics[];
}

export default function CourseDetails({ cta, statistics }: BannerProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`order-1 md:order-2 w-full md:max-w-[330px] lg:max-w-[400px] transition-all duration-300 ${
        isSticky ? "md:sticky md:top-[112px]" : ""
      }`}
    >
      <div className="md:border border-gray-200">
        <InstructionCourseDetails cta={cta} statistics={statistics} />
      </div>
      <MoreAboutCourse />
    </section>
  );
}

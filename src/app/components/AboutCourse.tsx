"use client";
import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import Accordion from "./ui/Accordion";
import { AboutCourseSection } from "@/interface/interface";

interface AboutSection {
  about?: AboutCourseSection | null;
}



export default function AboutCourse({ about }: AboutSection) {
  
  return (
    <div className="mb-7" id= "details-section">
      <SectionTitle>{about?.sectionName}</SectionTitle>
      <CardWrapper>
        {about && (
          <Accordion
            items={about.values.map((item) => ({
              title: item.title,
              content: item.description,
            }))}
          />
        )}
      </CardWrapper>
    </div>
  );
}

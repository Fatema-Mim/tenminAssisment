import React from "react";
import rating from "@/app/assets/rating.jpg";
import Image from "next/image";
import InstructionDemo from "./ui/InstructionDemo";
import { BasicInfo, MediaItem } from "@/interface/interface";

interface HeaderProps {
  basicInfo?: BasicInfo;
  media?: MediaItem[];
}

export default function CourseHeader({ basicInfo,media }: HeaderProps) {
  return (
    <div className="flex flex-col justify-center flex-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
      <div className="md:hidden block">
        <InstructionDemo media={media}/>
      </div>
      <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
        {basicInfo?.title}
      </h1>
      <div className="mb-2">
        <button className="flex flex-row flex-wrap gap-2 text-white">
          <span className="inline-block">
            <Image
              src={rating}
              alt="rating"
              className="md:w-[130px] w-[100px]"
            />
          </span>
          <span className="inline-block text-sm md:text-base">
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </button>
      </div>
      <div>
        <div
          className="text-gray-400 "
          style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
        >
          <div dangerouslySetInnerHTML={{ __html:basicInfo?.description || "" }} />
        </div>
      </div>
    </div>
  );
}

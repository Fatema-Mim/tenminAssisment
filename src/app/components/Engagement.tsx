import React from "react";
import Button from "./ui/Button";
import { GroupEngagement } from "@/interface/interface";

interface EngagementProps {
  engagement: GroupEngagement[];
}

export default function Engagement({ engagement }: EngagementProps) {
  const item = engagement[0]; 

  if (!item) return null;

  return (
    <div
      style={{
        backgroundImage: `url(${item.background?.image})`,
        backgroundSize: "cover",
      }}
      className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
    >
      <div className="w-full md:w-1/2">
        <img
          src={item.top_left_icon_img}
          style={{ height: 40 }}
          className="mb-4"
          alt="Icon"
        />
        <h2 className="text-xl font-semibold" style={{ color: item.title_color }}>
          {item.title}
        </h2>
        <p className="mt-2 text-base" style={{ color: item.description_color }}>
          {item.description}
        </p>
        <a href={item.cta.clicked_url} target="_blank" rel="noopener noreferrer">
          <Button className="mt-6" style={{ backgroundColor: item.cta.color }}>
            {item.cta.text}
          </Button>
        </a>
      </div>
      <div className="items-center hidden w-1/2 md:flex">
        <img src={item.thumbnail} height="200" alt="Thumbnail" />
      </div>
    </div>
  );
}

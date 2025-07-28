import React from "react";

type Props = {
  icon: string;
  text: string;
};

export default function CourseFactItem({ icon, text }: Props) {
  return (
    <div className="flex items-center mb-3 leading-5">
      <div
        className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out"
        style={{ fontSize: 0, opacity: "1" }}
      >
        <img
          src={icon}
          alt="icon"
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
          style={{ color: "transparent" }}
        />
      </div>
      <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
        {text}
      </h4>
    </div>
  );
}

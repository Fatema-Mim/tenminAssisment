import React from "react";

type CourseCardProps = {
  title: string;
  instructors: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  link: string;
};

export default function CourseCard({ title, instructors, price, oldPrice, image, link }: CourseCardProps) {
  return (
    <div
  className="cursor-pointer min-w-[200px] max-w-[200px] md:min-w-[272px] rounded-[6px] border border-[#E5E7EB] flex flex-col overflow-hidden transition-colors hover:border-green-600"
>
  <div className="opacity-100" style={{ fontSize: 0 }}>
    <img
      src={image}
      alt={title}
      loading="lazy"
      width={272}
      height={152}
      className="w-full h-auto object-cover"
      style={{ color: "transparent" }}
    />
  </div>
  <div className="flex flex-1 flex-col justify-between gap-2 p-[14px] min-w-0" style={{ minHeight: "150px" }}>
    <div>
      <h2 className="mb-1 line-clamp-2 max-h-14 text-sm font-semibold md:text-lg">
        {title}
      </h2>
      <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
        {instructors}
      </h3>
    </div>
    <div>
      <div className="flex items-center">
        <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">৳ {price}</p>
        {oldPrice && <del className="ml-2 text-gray-500">৳ {oldPrice}</del>}
      </div>
    </div>
  </div>
</div>

  );
}

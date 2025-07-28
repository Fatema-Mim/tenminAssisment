import {  ExclusiveFeatureSection } from "@/interface/interface";
import CardWrapper from "./CardWrapper";
import SectionTitle from "./ui/SectionTitle";

interface CourseFeatureProps {
  exclusive: ExclusiveFeatureSection | null | undefined;
 }

export default function CourseFeature({ exclusive }: CourseFeatureProps) {
  if (!exclusive) return null;

  return (
    <div className="mb-7" id= "exclusive-section">
      <SectionTitle>{exclusive.sectionName}</SectionTitle>

      <CardWrapper>
        <div className="flex flex-col gap-5 py-5">
          {exclusive.values.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between gap-3 md:flex-row"
            >
              {/* Text content */}
              <div className="flex flex-col gap-2">
                <h2 className="text-[14px] font-medium leading-[30px] text-[#111827] md:text-[16px]">
                  {item.title}
                </h2>

                {item.checklist.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-5"
                  >
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="15"
                      fill="none"
                      viewBox="0 0 19 15"
                    >
                      <path
                        fill="#6294F8"
                        stroke="#6294F8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.893}
                        d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                      />
                    </svg>

                    <p className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Image */}
              {item.file_type === "image" && (
                <div
                  className="mb-4 mx-auto max-w-[350px]"
                  style={{ fontSize: 0 }}
                >
                  <img
                    alt={item.title}
                    src={item.file_url}
                    loading="lazy"
                    width="250"
                    height="200"
                    decoding="async"
                    style={{ color: "transparent" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardWrapper>
    </div>
  );
}


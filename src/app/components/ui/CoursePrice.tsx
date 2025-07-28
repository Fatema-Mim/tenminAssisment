import React from "react";
import Button from "./Button";
import { CTA } from "@/interface/interface";


interface MediaProps {
  cta?:CTA
}

export default function CoursePrice({cta}: MediaProps) {
  return (
    <div className="px-0 py-4 md:px-4">
      <div className="flex flex-col w-full">
        <div>
          <div className="inline-block text-2xl font-semibold mb-3">
                ৳ 1000
              </div>
        </div>
        <Button fullWidth>{cta?.text}</Button>
      </div>
    </div>
  );
}

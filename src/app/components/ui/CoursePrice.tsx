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
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="md:mb-3">
              <div className="inline-block text-2xl font-semibold">
                ৳ 3,850
              </div>
              <span className="inline-flex">
                <del className="ml-2 text-base font-normal md:text-xl">
                  ৳ 5,000
                </del>
                <div className="c-Tukmu inline-block">
                  <p className="card-price">1150 ৳ ছাড়</p>
                </div>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2" />
        </div>
        <Button fullWidth>{cta?.text}</Button>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import TabItem from "./ui/TabItem";
import Slider from "react-slick";


export default function CourseInstruction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

 const tabItems = [
  { label: "কোর্স ইন্সট্রাক্টর", id: "instructor-section" },
  { label: "কোর্সটি যেভাবে সাজানো হয়েছে", id: "structure-section" },
  { label: "কোর্সটি করে যা শিখবেন", id: "outcome-section" },
  { label: "কোর্স সম্পর্কে বিস্তারিত", id: "details-section" },
  { label: "কোর্স এক্সক্লুসিভ ফিচার", id: "exclusive-section" },
  { label: "এই কোর্সের সাথে ফ্রি পাচ্ছেন–", id: "freebies-section" },
  { label: "শিক্ষার্থীরা যা বলছে", id: "testimonial-section" },
  { label: "সচরাচর জিজ্ঞাসা", id: "faq-section" },
];


  function NextArrow(props: any) {
    const { onClick } = props;
    const isDisabled = currentSlide >= totalSlides - 1;

    return (
      <div
        className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer ${
          isDisabled ? "opacity-30 pointer-events-none" : ""
        }`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          fill="none"
          viewBox="0 0 33 32"
          className="xl:mr-[-40px]"
        >
          <path
            fill="#000"
            fillOpacity="0.5"
            fillRule="evenodd"
            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    const isDisabled = currentSlide === 0;

    return (
      <div
        className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer ${
          isDisabled ? "opacity-30 pointer-events-none" : ""
        }`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          fill="none"
          viewBox="0 0 33 32"
          className="rotate-180 xl:ml-[-40px]"
        >
          <path
            fill="#000"
            fillOpacity="0.5"
            fillRule="evenodd"
            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    onInit: () => {
      setTotalSlides(tabItems.length - 4);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sticky top-[53px] z-20 hidden bg-white md:block">
      <div className="slider-container relative w-full">
        <Slider
          ref={sliderRef}
          {...settings}
          className="my-4 border-b border-gray-200 slick-width"
        >
          {tabItems.map((tab, index) => (
            <TabItem
              targetId={tab.id}
              label={tab.label}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

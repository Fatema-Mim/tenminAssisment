"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import CourseCard from "./ui/CourseCard";
import SectionTitle from "./ui/SectionTitle";
import { courses } from "../data/course";

function PrevArrow({ onClick, disabled }: { onClick?: () => void; disabled: boolean }) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`absolute right-5 -top-[25px] z-10 -translate-y-1/2 cursor-pointer transition-opacity ${
        disabled ? "opacity-30 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        fill="none"
        viewBox="0 0 33 32"
        className="rotate-180"
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

function NextArrow({ onClick, disabled }: { onClick?: () => void; disabled: boolean }) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`absolute right-[-20px] -top-[25px] z-10 -translate-y-1/2 cursor-pointer transition-opacity ${
        disabled ? "opacity-30 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        fill="none"
        viewBox="0 0 33 32"
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

export default function MoreCourse() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const totalSlides = courses.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipe: true,
    swipeToSlide: true,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else if (width < 1280) setSlidesToShow(3);
      else setSlidesToShow(4);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const isFirst = currentSlide === 0;
  const isLast = currentSlide >= totalSlides - slidesToShow;

  return (
    <section className="container mx-auto w-full px-4 md:px-9 mb-7">
      <SectionTitle>আপনার জন্য আরও কিছু কোর্স</SectionTitle>
      <div className="relative mt-7">
        <PrevArrow onClick={handlePrev} disabled={isFirst} />
        <NextArrow onClick={handleNext} disabled={isLast} />

        <Slider ref={sliderRef} {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="px-2 h-[360px]">
              <CourseCard
                title={course.title}
                instructors={course.instructors}
                price={course.price}
                oldPrice={course.oldPrice}
                image={course.image}
                link={course.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

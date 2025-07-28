"use client";

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import { TestimonialSection } from "@/interface/interface";

interface TestimonialsProps {
  testimonials: TestimonialSection | null;
 }

export default function Testimonials ({testimonials}:TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const sliderRef = useRef<any>(null);

  
  const totalSlides = Math.ceil((testimonials?.values?.length ?? 0) / slidesToShow);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  function NextArrow(props: any) {
    const { onClick } = props;
    const isDisabled = currentSlide >= totalSlides;

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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="mb-7">
      <SectionTitle>{testimonials?.sectionName}</SectionTitle>

      <div className="slider-container relative">
        <Slider
          ref={sliderRef}
          {...settings}
          className="my-4 border-b border-gray-200"
        >
          {testimonials?.values?.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              score={item.description}
              image={item.profile_image}
              videoId={item.video_url}
              thumb={item.thumb} 
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
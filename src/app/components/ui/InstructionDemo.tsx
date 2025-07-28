"use client";
import { MediaItem } from "@/interface/interface";
import { useRef, useState, useEffect, useMemo } from "react";
import Slider from "react-slick";

interface MediaProps {
  media?: MediaItem[];
}

export default function InstructionDemo({ media }: MediaProps) {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, []);

  const previewImages = useMemo(() => {
    if (!media) return [];

    return media
      .filter((item) => item.name === "preview_gallery")
      .map((item) => ({
        type: item.resource_type,
        url: item.resource_value,
        thumbnail: item.thumbnail_url || (item.resource_type === "image" ? item.resource_value : ""),
        name: item.name,
      }));
  }, [media]);

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return <div className={`${className} !right-4 z-10`} style={{ ...style }} onClick={onClick} />;
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return <div className={`${className} !left-4 z-10`} style={{ ...style }} onClick={onClick} />;
  }

  const mainSettings = {
    asNavFor: nav2,
    ref: slider1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    className: "slick-margin",
  };

  return (
    <div className="slider-container">
      <div className="mb-6">
        <Slider {...mainSettings}>
          {previewImages.map((item, index) => (
            <div key={index} className="w-full">
              {item.type === "video" ? (
                <div className="w-full h-[200px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.url}`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-[200px] object-cover"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className="mx-auto">
        <Slider {...thumbSettings}>
          {previewImages.map((item, index) => (
            <div key={index}>
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-[85px] h-12 object-cover rounded-md mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

import React, { useState } from "react";

type TestimonialCardProps = {
  name: string;
  score: string;
  image: string;
  videoId: string;
  thumb: string;
  testimonial:string;
};

export default function TestimonialCard({
  name,
  score,
  image,
  videoId,
  thumb,
  testimonial

}: TestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayVideo() {
    setIsPlaying(true);
  }

  return (
    <div className="mr-2">
      <div className="relative mt-5 rounded-lg border p-6 flex flex-col justify-between bg-white">
        <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 20 30"
            >
              <path
                fill="#D33242"
                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 20 30"
            >
              <path
                fill="#D33242"
                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
              />
            </svg>
          </div>
        </div>

        <div
          className="w-full mb-4 overflow-hidden rounded-md aspect-video cursor-pointer"
          onClick={handlePlayVideo}
        >
         {isPlaying ? (
    <iframe
      width="322"
      height="181"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Testimonial Video"
    />
  ) : thumb ? (
    <img
      src={thumb}
      alt={`Video thumbnail for ${name}`}
      className="w-full h-full object-cover rounded-md"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4 text-gray-600 text-sm italic rounded-md text-center leading-relaxed">
      {testimonial}
    </div>
  )}
        </div>

        <div className="flex gap-4 items-center">
          <div className="rounded-full overflow-hidden w-[50px] h-[50px]">
            <img
              src={image}
              alt={name}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

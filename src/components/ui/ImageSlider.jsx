"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img7_m0rsfl.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894047/img6_f1ypc6.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894050/img8_oa67dw.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img10_nhwgta.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894052/img11_tsyjhr.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894131/img73_tizcd3.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894109/img55_kdnu1q.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img6_e55i2r.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894045/img4_tmpavf.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894046/img5_sau6fx.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img9_hk2dj1.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894056/img15_q3nedu.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img13_yqq4fs.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img14_yw3d4l.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894044/img3_gha5qo.png",
];

export default function ImageSlider() {
  const sliderRef = useRef(null);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 250,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[80%] mx-auto py-10 overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-1/2 z-10 h-40 w-24 -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-10 h-40 w-24 -translate-y-1/2 bg-gradient-to-l from-white to-transparent" />

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="flex gap-4 overflow-hidden scroll-smooth">
        {images.map((image, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0 py-5">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-40 w-full rounded-lg object-cover shadow-md bg-white"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

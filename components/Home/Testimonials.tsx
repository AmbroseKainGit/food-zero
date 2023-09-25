'use client'
import React, { useEffect, useState, useRef } from "react";
import data from "@/data/fakeDataComments.json";
import { TestimonialCard } from "./components/TestimonialCard";
import { Carousel } from "@trendyol-js/react-carousel";

export const Testimonials = () => {
  const [carouselShow, setCarouselShow] = useState(2.5)
  const [carouselSlide, setCarouselSlide] = useState(2)
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const newWidth = entries[0]?.contentRect.width;
      setWidth(newWidth);
      if(newWidth <= 1010) {
        setCarouselShow(1.5);
        setCarouselSlide(1);
      } else {
        setCarouselShow(2.5);
        setCarouselSlide(2);
      }
      
    });

    resizeObserver.observe(ref.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [width]);



  return (
    <div className="testimonials-inner-container" ref={ref}>
      <h3>Rate & Relate: Share Your Restaurant Experience!</h3>
      <Carousel
        show={carouselShow}
        slide={carouselSlide}
        swiping={true}
        responsive={true}
        className="testiomnials-container-home"
      >
        {data.map(({ name, id, stars, comment }) => {
          return (
            <TestimonialCard
              key={id}
              name={name}
              comment={comment}
              stars={stars}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

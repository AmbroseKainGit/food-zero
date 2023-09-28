"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import data from "@/data/fakeDataComments.json";
import { TestimonialCard } from "./components/TestimonialCard";
import { Carousel } from "@trendyol-js/react-carousel";
import { selectParams } from "@/lib/redux";
import { useAppSelector } from "@/hooks/redux";

export const Testimonials = () => {
  const [carouselShow, setCarouselShow] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { data: params } = useAppSelector(selectParams);
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const newWidth = entries[0]?.contentRect.width;
      setWidth(newWidth);
      if (newWidth <= 740) {
        setCarouselShow(1);  // Show 1 slide
        setCarouselSlide(1);
      } else if (newWidth <= 1010) {
        setCarouselShow(1.5); // Show 1.5 slides
        setCarouselSlide(1);
      } else {
        setCarouselShow(2.5); // Show 2.5 slides
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
      <h3>{params?.getParams.titleCommentsHome}</h3>
      {ref.current && (
        <Carousel
          show={carouselShow}
          slide={carouselSlide}
          swiping={true}
          responsive={true}
          dynamic={true}
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
      )}
    </div>
  );
};

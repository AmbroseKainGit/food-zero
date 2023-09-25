'use client'
import React, { useEffect, useState } from "react";
import data from "@/data/fakeDataComments.json";
import { TestimonialCard } from "./components/TestimonialCard";
import { Carousel } from "@trendyol-js/react-carousel";

export const Testimonials = () => {


  return (
    <div className="testimonials-inner-container">
      <h3>Rate & Relate: Share Your Restaurant Experience!</h3>
      <Carousel
        show={2.5}
        slide={2}
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

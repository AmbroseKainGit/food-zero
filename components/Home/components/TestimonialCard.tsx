'use client'
import { AiTwotoneStar } from "react-icons/ai";
import { TestimonialStars } from "./TestimonialStars";


interface Props {
  name: string;
  comment: string;
  stars: number;
}

export const TestimonialCard = ({ name, comment, stars }: Props) => {

  return (
    <div className="card-testimonial-container">
      <div className="information-testimonial-container">
        <p className="card-Name">{name}</p>
        <ul className="stars-container">
          <TestimonialStars stars={stars} />
        </ul>
      </div>
      <div className="comment-testimonial-container">
        <p>{comment}</p>
      </div>
    </div>
  );
};

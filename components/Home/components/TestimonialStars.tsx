import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface Props {
  stars: number;
}

export const TestimonialStars = ({stars}:Props) => {
  const starIcons = new Array(5).fill(0).map((_, index) => {
    if (index < stars) {
      return <AiTwotoneStar key={index} />;
    } else {
      return <AiOutlineStar key={index} />;
    }
  });

  return <div>{starIcons}</div>;
  }
  
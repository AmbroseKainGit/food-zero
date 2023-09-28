'use client'
import { useQuery } from "@apollo/client";
import { InformationCard } from "./components/InformationCard";
import { queryFoodSpecs } from "@/utils/querys";

export interface FoodSpecs {
  id: number;
  title: string;
  image: string; 
  content: string; 
}

interface QueryResult {
  foodSpecs: FoodSpecs[]; // Assuming your GraphQL query returns an array of FoodSpecs
}


export const InformationSection = () => {
  const { loading, error, data } = useQuery<QueryResult>(queryFoodSpecs);
console.log(data);

  
  return (
    <div className="informattion-container-home">
      {data?.foodSpecs.map(({ image, title, content, id }) => {
        return (
          <InformationCard
            key={id}
            image={image}
            title={title}
            content={content}
          />
        );
      })}
    </div>
  );
};

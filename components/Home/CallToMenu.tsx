"use client"
import { CategoryQuery } from "@/typings";
import { CallToMenuCard } from "./components/CallToMenuCard";
import { queryMenu } from "@/utils/querys";
import { useQuery } from "@apollo/client";

export const CallToMenu = () => {
  const { loading, error, data } = useQuery<CategoryQuery>(queryMenu);
  return (
    <div className="calltomenu-inner-container">
      <div className="information-calltomenu-container">
        <h2>Calories Energy Balance</h2>
        <p>The key to managing your weight and overall health.</p>
      </div>
      <div className="calltomenu-cards-container">
        {data && data.categories.map(({ image, name, id }) => {
          return <CallToMenuCard key={id} image={image} title={name} />;
        })}
      </div>
    </div>
  );
};

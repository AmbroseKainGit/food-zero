import { InformationCard } from "./components/InformationCard";

export interface FoodSpecs {
  id: number;
  title: string;
  image: string; 
  content: string; 
}

const fetchData = async () => {
  try {
    const response = await fetch("https://food-zero-api.onrender.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if required (e.g., authorization token)
      },
      body: JSON.stringify({
        query: `
          query FoodSpecs {
            foodSpecs {
              id
              image
              title
              content
            }
          }
        `
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const {data:{foodSpecs}} = await response.json();
   return foodSpecs;
  } catch (error) {
    console.error("Error:", error);
  }
};


export const InformationSection = async() => {
  const data:FoodSpecs[] = await fetchData();

  
  return (
    <div className="informattion-container-home">
      {data?.map(({ image, title, content, id }) => {
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

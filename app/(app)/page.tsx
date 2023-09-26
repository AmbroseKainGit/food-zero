import { CallToAction } from "@/components/Home/CallToAction";
import { InformationSection } from "@/components/Home/InformationSection";
import { FirstAd } from "@/components/Home/FirstAd";
import { Header } from "@/components/Home/Header";
import { BlogSection } from "@/components/Home/BlogSection";


import { Reservation } from "@/components/General/Reservation";
import { CallToMenu } from "@/components/Home/CallToMenu";
import { Testimonials } from "@/components/Home/Testimonials";

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

export default function Landing() {
 
  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="call-action-main">
        <CallToAction />
      </div>
      <div className="advertising-first-container">
        <FirstAd />
      </div>
      <div className="information-container-main">
        <InformationSection />
      </div>
      <div className="blog-container-main">
        <BlogSection />
      </div>
      <div className="calendar-container-main">
        <Reservation />
      </div>
      <div className="calltomenu-container-main">
        <CallToMenu />
      </div>
      <div className="testimonial-container-main">
        <Testimonials/>
      </div>
    </>
  );
}

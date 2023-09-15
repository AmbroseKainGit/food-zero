import { CallToMenuCard } from "./components/CallToMenuCard";
import data from "@/data/fakeDataCalltoMenu.json"

export const CallToMenu = () => {
  return (
    <div className="calltomenu-inner-container">
      <div className="information-calltomenu-container">
        <h2>Calories Energy Balance</h2>
        <p>The key to managing your weight and overall health.</p>
      </div>
<div className="calltomenu-cards-container">
{data.map(({image,title,id,})=>{
        return(
          <CallToMenuCard key={id} image={image} title={title}/>
        )
      })}
</div>
    </div>
  );
};

import { InformationCard } from "./components/InformationCard"
import data from "@/data/fakeDataHome.json"

export const InformationSection = () => {
  return (
    <div className="informattion-container-home">
      {data.map(({image,title,content,id})=>{
        return(
          <InformationCard key={id} image={image} title={title} content={content}/>
        )
      })}

     </div>
  );
};

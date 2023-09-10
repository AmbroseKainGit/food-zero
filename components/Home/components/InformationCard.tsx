import Image from "next/image";


interface Props {
image:string;
title:string;
content:string;
}


export const InformationCard = ({image, title,content}:Props )=> {
  
  
  return (
    <div className="card-information-container">
      <Image
        src={image}
        width={260}
        height={260}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

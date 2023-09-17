import React from "react";
import { BlogCard } from "./components/BlogCard";
import data from "@/data/fakeDataBlog.json"

export const BlogSection = () => {
  return <div className="blog-container-home">
    {data.slice(0, 2).map(({image,title,content,id,slug})=>{
        return(
          <BlogCard key={id} image={image} title={title} content={content} slug={slug}/>
        )
      })}
  </div>;
};

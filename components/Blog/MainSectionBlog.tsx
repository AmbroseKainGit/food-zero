import data from "@/data/fakeDataBlog.json"
import { BlogCard } from "../Home/components/BlogCard";

export const MainSectionBlog = () => {
    return <div className="blog-container-page">
    {data.slice(2).map(({image,title,content,id,slug})=>{
        return(
          <BlogCard key={id} image={image} title={title} content={content} slug={slug}/>
        )
      })}
  </div>;
  
}

import { MainSectionBlog } from "@/components/Blog/MainSectionBlog";
import { HeaderComponent } from "@/components/General/HeaderComponent";

const Blog = () => {
  return (
    <>
      <HeaderComponent
        title={"Taste Chronicles"}
        titleFontSize={10.8}
        description={"Adventures in Dining"}
        descriptionFontSize={2.4}
        ubication={"center"}
        textAling={"center"}
        textContainerWidth={75}
        background={"/static/black-flower.webp"}
      />
      <div className="blog-container-main">
        <MainSectionBlog />
      </div>
    </>
  );
};

export default Blog;

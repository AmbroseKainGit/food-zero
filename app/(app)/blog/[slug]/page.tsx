"use client";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Testimonials } from "@/components/Home/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

interface pageProps {
  params: { slug: string };
}
const SinglePost = ({ params }: pageProps) => {
  return (
    <div className="main-container-single-post">
      <HeaderComponent
        title={"Fruit and vegetables and protection against diseases"}
        titleFontSize={8.8}
        description={"Adventures in Dining"}
        descriptionFontSize={0}
        ubication={"center"}
        textAling={"center"}
        textContainerWidth={100}
        background={"/static/single-post-bg.webp"}
      />
      <div className="information-post-contaner">
        <div className="inner-post-container">
          <Link href={"/blog"} className="goback-link">
            <MdArrowBackIosNew />
            <span>Blog</span>{" "}
          </Link>
          <div className="image-post-container">
            <Image
              src="/static/goat-meat.webp"
              fill
              sizes="(max-width: 1940px) 70%"
              alt="single post test"
            />
          </div>

          <div className="post-content-information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla
              sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
              penatibus imperdiet. Turpis egestas ultricies purus auctor
              tincidunt lacus nunc. Convallis pellentesque quis fringilla
              sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
              penatibus imperdiet.
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-container-main">
        <Testimonials />
      </div>
    </div>
  );
};

export default SinglePost;

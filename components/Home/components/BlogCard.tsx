import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  image: string;
  title: string;
  content: string;
  slug: string;
}
export const BlogCard = ({ image, title, content, slug }: Props) => {
  return (
    <div className="card-blog-container">
      <Image src={image} width={792} height={792} alt={title} />
      <div className="information-blog-container">
        <h3>{title}</h3>
        <p>{content}</p>
        <button>
          <Link href={`/blog/${slug}`}>
            <span>Read More</span>
            <FiArrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
};

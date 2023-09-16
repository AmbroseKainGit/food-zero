import Image from "next/image";
import { TomatoSvg } from "../Svg/TomatoSvg";
interface props {
    title: string;
    description: string;
    image: string;
}
export const About = ({ title, description, image }: props) => {
    return (
        <div className="about__container">
            <div className="about__container__svg">
                <TomatoSvg />
            </div>
            <div className="about__container__left">
                <div className="about__container__left__title">{title}</div>
                <div className="about__container__left__description">{description}</div>
            </div>
            <Image src={image} alt="about" width={792} height={567} />
        </div>
    )
}

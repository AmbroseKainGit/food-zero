"use client";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
import Image from "next/image";
export const Header = () => {
  const { data: params } = useAppSelector(selectParams);
  return (
    <header className="header-container">
      <div className="hero-header-title">
        <h1>{params?.getParams.homeSection1Title}</h1>
        <p>{params?.getParams.homeSection1Subtitle}</p>
        <div className="hero-header-scroll">
          <p>Scroll ---------------------------</p>
        </div>
      </div>
      <Image
        src={
          params?.getParams.homeSection1Image1 ||
          "/static/imagen-plato-carne.webp"
        }
        width={792}
        height={931}
        alt="Plate with a Piece of Meat"
      />
      <Image
        src="/static/spices.webp"
        width={260}
        height={240}
        alt="Plate of Spices"
      />
      <Image
        src="/static/spices2.webp"
        width={260}
        height={240}
        alt="Plate of Spices"
      />
      <Image
        src="/static/spices1.webp"
        width={260}
        height={240}
        alt="Plate of Spices"
      />
      <div className="header-inner-section">
        <div className="first-inner-section">
          <Image
            src={
              params?.getParams.homeSection1Image2 ||
              "/static/oyster-cream.webp"
            }
            width={792}
            height={560}
            alt="Oyster Cream"
          />
          <h3>{params?.getParams.homeSection1ImagesText1}</h3>
          <p>{params?.getParams.homeSection1Paragraph1}</p>
        </div>
        <div className="second-inner-section">
          <p>{params?.getParams.homeSection1Paragraph2}</p>
          <Image
            src="/static/pepper-and-salt.webp"
            width={508}
            height={710}
            alt="pepper and salt"
          />
        </div>
      </div>
    </header>
  );
};

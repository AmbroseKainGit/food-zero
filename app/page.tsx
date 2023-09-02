"use client";

import Cover from "@/components/General/Cover";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="main-header-container">
      <Cover />
      <header className="header-container">
        <div className="hero-header-title">
          <h2>Healthy Eating is important part of lifestyle</h2>
          <p>Discovering Nutritional Delights: A Path to Wellness</p>
        </div>
        <Image
          src="/static/imagen-plato-carne.webp"
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
      </header>
    </div>
  );
}

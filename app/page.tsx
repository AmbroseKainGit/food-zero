"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <div className="main-header-container">
      <header className="header-container">
        <div className="hero-header-title">
          <h2>Healthy Eating is important part of lifestyle</h2>
          <p>Discovering Nutritional Delights: A Path to Wellness</p>
          <div className="hero-header-scroll">
            <p>Scroll ---------------------------</p>
          </div>
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
              src="/static/oyster-cream.webp"
              width={792}
              height={560}
              alt="Oyster Cream"
            />
            <h3>Start to plan your diet today</h3>
            <p>Good nourishment leads to good wellness.</p>
          </div>
          <div className="second-inner-section">
            <p>Salt and pepper, the culinary duo that adds the perfect flavor to every dish.</p>
            <Image
              src="/static/pepper-and-salt.webp"
              width={508}
              height={710}
              alt="pepper and salt"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

"use client";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
import Image from "next/image";
import React from "react";

export const FirstAd = () => {
  const { data: params } = useAppSelector(selectParams);
  return (
    <div className="ad-container">
      <div className="ad-img-container">
        <Image
          src={
            params?.getParams.homeSection3Image1 ||
            "/static/person-cooking.webp"
          }
          width={935}
          height={933}
          alt="vegetation"
        />
      </div>
      <div className="ad-information-container">
        <h3>{params?.getParams.homeSection2Title}</h3>
        <p>{params?.getParams.homeSection2Subtitle}</p>
      </div>
      <Image
        src={params?.getParams.homeSection3Image2 || "/static/leaf-one.webp"}
        width={456}
        height={464}
        alt="vegetation"
      />
      <Image
        src={params?.getParams.homeSection3Image3 || "/static/leaf-2.webp"}
        width={365}
        height={374}
        alt="vegetation"
      />
    </div>
  );
};

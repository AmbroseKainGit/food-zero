"use client";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";

export const CallToAction = () => {
  const { data: params } = useAppSelector(selectParams);
  return (
    <div className="call-container">
      <h2>{params?.getParams.homeSectionMenuTitle}</h2>
      <p>{params?.getParams.homeSectionMenuSubtitle}</p>
      <Image
        src="/static/vegetation-bg.webp"
        width={880}
        height={946}
        alt="vegetation"
      />

      <button style={{ zIndex: 1 }}>
        <Link href={"/menu"}>{params?.getParams.homeSection2ButtonText}</Link>
      </button>
    </div>
  );
};

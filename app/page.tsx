"use client";
import { CallToAction } from "@/components/Home/CallToAction";
import { FirstAd } from "@/components/Home/FirstAd";
import { Header } from "@/components/Home/Header";
import { useAppSelector } from "@/hooks/redux";
import { selectCover } from "@/lib/redux";
export default function Landing() {
  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="call-action-main">
        <CallToAction />
      </div>
      <div className="advertising-first-container">
        <FirstAd />
      </div>
    </>
  );
}

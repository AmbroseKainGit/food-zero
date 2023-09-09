"use client";
import { CallToAction } from "@/components/Home/CallToAction";
import { InformationSection} from "@/components/Home/InformationSection";
import { FirstAd } from "@/components/Home/FirstAd";
import { Header } from "@/components/Home/Header";
import { BlogSection } from "@/components/Home/BlogSection";
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
      <div className="information-container-main">
        <InformationSection />
      </div>
      <div className="blog-container-main">
        <BlogSection />
      </div>

    </>
  );
}

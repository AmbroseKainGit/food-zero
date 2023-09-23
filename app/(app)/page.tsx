import { CallToAction } from "@/components/Home/CallToAction";
import { InformationSection } from "@/components/Home/InformationSection";
import { FirstAd } from "@/components/Home/FirstAd";
import { Header } from "@/components/Home/Header";
import { BlogSection } from "@/components/Home/BlogSection";


import { Reservation } from "@/components/General/Reservation";
import { CallToMenu } from "@/components/Home/CallToMenu";
import { Testimonials } from "@/components/Home/Testimonials";
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
      <div className="calendar-container-main">
        <Reservation />
      </div>
      <div className="calltomenu-container-main">
        <CallToMenu />
      </div>
      <div className="testimonial-container-main">
        <Testimonials/>
      </div>
    </>
  );
}

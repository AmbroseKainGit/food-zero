"use client";
import { Contact } from "@/components/Contact/Contact";
import { HeaderComponent } from "@/components/General/HeaderComponent";
export default function Menu() {
  return (
    <>
      <HeaderComponent
        title={'Get in touch'}
        titleFontSize={14.8}
        description={'The freshest ingredients for you every day'}
        descriptionFontSize={3.2}
        ubication={'left'}
        showOpenTime={true}
        textAling={'left'}
        textContainerWidth={55}
        background={'/static/contact_cover.webp'}
      />
      <Contact email="info@foodzero.com" phone="+86 852 346 000" address="1959 Sepulveda Blvd. Culver City, CA, 90230" />
    </>
  );
}

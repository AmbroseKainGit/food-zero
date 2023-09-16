"use client";
import { About } from "@/components/About/About";
import { HeaderComponent } from "@/components/General/HeaderComponent";
export default function Menu() {
  const title = 'Our Story';
  const image = '/static/about_1.webp';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. ';
  return (
    <>
      <HeaderComponent
        title={'Who We Are'}
        titleFontSize={14.8}
        description={'The most important thing for us is to give you the comfortable dining experience'}
        descriptionFontSize={3.2}
        ubication={'right'}
        textAling={'left'}
        textContainerWidth={55}
        background={'/static/about_cover.webp'}
      />
      <About title={title} description={description} image={image} />
    </>
  );
}

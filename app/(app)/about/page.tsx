"use client";
import { About } from "@/components/About/About";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Staff } from "@/components/Staff/Staff";
import { useState } from "react";
export default function Menu() {
  const title = 'Our Story';
  const image = '/static/about_1.webp';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. ';
  const Staffdata = {
    "staff": [
      {
        "name": "Jhon bols",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Restaurant Owner",
        "image": "https://source.unsplash.com/random/900x900?sig=1"
      },
      {
        "name": "Joaquin Huhges", 
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Executive Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=2"
      },
      {
        "name": "Jane Doe",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Head Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=3"
      },
      {
        "name": "Cristian Doe",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Sous Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=4"
      },
      {
        "name": "Jhon bols",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Restaurant Owner",
        "image": "https://source.unsplash.com/random/900x900?sig=1"
      },
      {
        "name": "Joaquin Huhges", 
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Executive Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=2"
      },
      {
        "name": "Jane Doe",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Head Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=3"
      },
      {
        "name": "Cristian Doe",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        "role": "Sous Chef",
        "image": "https://source.unsplash.com/random/900x900?sig=4"
      },
    ]
  }

  const [topPosition, settopPosition] = useState(0)
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
      {Staffdata && Staffdata.staff.map((staffMember, index) => {
        return (
          <Staff data={staffMember} key={index} loopIndex={index} />
        )
      })}
    </>
  );
}

"use client";
import { useForm } from "@/hooks/useForm";
import { IHome, ParamsQuery } from "@/typings";

interface props {
  params?: ParamsQuery | null;
}
export const Home = ({ params }: props) => {
  const { handleInputChange, values } = useForm<IHome>({
    homeSection1Images: [],
    homeSection1ImagesText1: "",
    homeSection1ImagesText2: "",
    homeSection1Paragraph1: "",
    homeSection1Paragraph2: "",
    homeSection1Subtitle: "",
    homeSection1Title: "",
    homeSection2ButtonText: "",
    homeSection2Subtitle: "",
    homeSection2Title: "",
    homeSection3Title: "",
    homeSectionMenuTitle: "",
    titleComments: "",
    homeSectionMenuSubtitle: "",
    homeSection3Images: [],
    homeSection3Paragraph: ""
  });
  const {titleComments} = values;
  const arrayAsString = JSON.stringify(params);
  return (
    <>
      <pre>{arrayAsString}</pre>
      <h1>Home</h1>
      <input type="text" value={titleComments} name="titleComments" onChange={handleInputChange}/>
    </>
  );
};

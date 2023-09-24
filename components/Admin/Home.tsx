"use client";
import { useForm } from "@/hooks/useForm";
import { IHome, ParamsQuery } from "@/typings";
import { useMutation } from "@apollo/client";
import { updateParamsMutation } from "../../utils/mutations";

interface props {
  params?: ParamsQuery | null;
}
export const Home = ({ params }: props) => {
  const [updateParams] = useMutation(updateParamsMutation);
  const { handleInputChange, values } = useForm<IHome>({
    homeSection1Images: params?.getParams.homeSection1Images || [],
    homeSection1ImagesText1: params?.getParams.homeSection1ImagesText1 || "",
    homeSection1ImagesText2: params?.getParams.homeSection1ImagesText2 || "",
    homeSection1Paragraph1: params?.getParams.homeSection1Paragraph1 || "",
    homeSection1Paragraph2: params?.getParams.homeSection1Paragraph2 || "",
    homeSection1Subtitle: params?.getParams.homeSection1Subtitle || "",
    homeSection1Title: params?.getParams.homeSection1Title || "",
    homeSection2ButtonText: params?.getParams.homeSection2ButtonText || "",
    homeSection2Subtitle: params?.getParams.homeSection2Subtitle || "",
    homeSection2Title: params?.getParams.homeSection2Title || "",
    homeSection3Title: params?.getParams.homeSection3Title || "",
    homeSectionMenuTitle: params?.getParams.homeSectionMenuTitle || "",
    titleCommentsHome: params?.getParams.titleCommentsHome || "",
    homeSectionMenuSubtitle: params?.getParams.homeSectionMenuSubtitle || "",
    homeSection3Images: params?.getParams.homeSection3Images || [],
    homeSection3Paragraph: params?.getParams.homeSection3Paragraph || ""
  });
  const { titleCommentsHome } = values;
  const handleSave = async () => {
    try {
      const { data } = await updateParams({
        variables: {
          updateParamInput1: {
            id: params?.getParams.id,
            ...values
          }
        }
      });
      console.log("Params Updated:", data);
    } catch (error) {
      console.error("Error updating params:", error);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSave}></form>
      <label htmlFor="titleCommentsHome">Title For Comments Section</label>
      <input
        type="text"
        value={titleCommentsHome}
        name="titleCommentsHome"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSave}>
        Guardar
      </button>
    </>
  );
};

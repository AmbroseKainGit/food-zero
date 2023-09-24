"use client";
import { useForm } from "@/hooks/useForm";
import { IHome, ParamsQuery } from "@/typings";

interface props {
  handleSave: (id: string | undefined, values: any) => void;
  params?: ParamsQuery | null;
}
export const Home = ({ handleSave, params }: props) => {
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
  return (
    <>
      <div className="admin-general-header">
        <h1 className="admin-general-header__title">Home</h1>
        <button onClick={() => handleSave(params?.getParams.id, values)}>
          Guardar
        </button>
      </div>
      <div className="admin-general-container">
        {Object.entries(values).map(([key, value]) => (
          <div key={key} className="admin-general-container__card">
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleInputChange}
            />
          </div>
        ))}       
      </div>
    </>
  )
};

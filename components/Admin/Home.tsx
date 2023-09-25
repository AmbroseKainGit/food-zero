"use client";
import { useForm } from "@/hooks/useForm";
import { IHome, ParamsQuery } from "@/typings";
import UploadFile from "../General/UploadFile";

interface props {
  handleSave: (id: string | undefined, values: any) => void;
  params?: ParamsQuery | null;
}
export const Home = ({ handleSave, params }: props) => {
  const images = [
    "homeSection1Image1",
    "homeSection1Image2",
    "homeSection3Image1",
    "homeSection3Image2",
    "homeSection3Image3"
  ];
  const { handleInputChange, values, handleChange } = useForm<IHome>({
    homeSection1Image1: params?.getParams.homeSection1Image1 || "",
    homeSection1Image2: params?.getParams.homeSection1Image2 || "",
    homeSection3Image1: params?.getParams.homeSection3Image1 || "",
    homeSection3Image2: params?.getParams.homeSection3Image2 || "",
    homeSection3Image3: params?.getParams.homeSection3Image3 || "",
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
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {images.includes(key) ? (
              <UploadFile
                url={value}
                name={key}
                key={key}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

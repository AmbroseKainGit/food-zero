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
  const { titleCommentsHome, homeSection1Title } = values;
  return (
    <>
      <h1 className="admin-general-title">Home</h1>
      <div className="admin-general-container">
        <div className="admin-general-container__card">
      
        </div>
      </div>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave(params?.getParams.id, values);
        }}
      >
        <div className="form-container__section">
          <h2 className="form-container__section-title">Section 1</h2>
          <div className="form-container__section-row">
            <div className="form-container__section-row__field">
              <label
                htmlFor="homeSection1Title"
                className="form-container__section-row__field-label"
              >
                Title
              </label>
              <input
                type="text"
                id="homeSection1Title"
                name="homeSection1Title"
                value={homeSection1Title}
                onChange={handleInputChange}
                className="form-container__section-row__field-input"
              />
            </div>
            <div className="form-container__section-row__field">
              <label
                htmlFor="titleCommentsHome"
                className="form-container__section-row__field-label"
              >
                Field 2
              </label>
              <input
                type="text"
                id="titleCommentsHome"
                name="titleCommentsHome"
                value={titleCommentsHome}
                onChange={handleInputChange}
                className="form-container__section-row__field-input"
              />
            </div>
            <div className="form-container__section-row__field">
              <label
                htmlFor="field3"
                className="form-container__section-row__field-label"
              >
                Field 3
              </label>
              <input
                type="text"
                id="field3"
                name="field3"
                value={""}
                onChange={handleInputChange}
                className="form-container__section-row__field-input"
              />
            </div>
          </div>
        </div>

        <div className="form-container__section">
          <h2 className="form-container__section-title">Section 2</h2>
          <div className="form-container__section-row">
            {/* Repeat the same structure as above for Section 2 */}
          </div>
        </div>
        <button type="submit" className="form-container__submit">
          {" "}
          Save
        </button>
      </form>
    </>
  );
};

import { General } from "./General";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { About } from "./About";
import { ParamsQuery } from "@/typings";
import { useMutation } from "@apollo/client";
import { updateParamsMutation } from "../../utils/mutations";

interface props {
  isOpen: boolean;
  renderModule: keyof typeof componentMap;
  params?: ParamsQuery | null
}
export const componentMap = {
  General,
  Home,
  Menu,
  Blog,
  Contact,
  About,
};

export const AdminContent = ({ isOpen, renderModule, params }: props) => {
  const RenderedComponent = componentMap[renderModule];
  const [updateParams] = useMutation(updateParamsMutation);
  const handleSave = async (id: string | undefined, values: []) => {
    try {
      const { data } = await updateParams({
        variables: {
          updateParamInput1: {
            id: id,
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
    <div className={`admin__content ${isOpen ? 'open' : ''}`}>
      {RenderedComponent && <RenderedComponent params={params} handleSave={handleSave}/>}
    </div>
  )
}

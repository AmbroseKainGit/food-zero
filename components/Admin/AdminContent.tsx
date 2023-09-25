import { General } from "./General";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { About } from "./About";
import { ParamsQuery } from "@/typings";
import { useMutation } from "@apollo/client";
import { updateParamsMutation } from "../../utils/mutations";
import { useAppDispatch } from "@/hooks/redux";
import { fetchDataSuccess } from "@/lib/redux";

interface props {
  isOpen: boolean;
  renderModule: keyof typeof componentMap;
  params: ParamsQuery | null; 
}
export const componentMap = {
  General,
  Home,
  Menu,
  Blog,
  Contact,
  About
};

export const AdminContent = ({ isOpen, renderModule, params }: props) => {
  const dispatch = useAppDispatch();
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
      dispatch(
        fetchDataSuccess({
          data: {
            getParams: {
              ...data.updateParam
            }
          },
          loading: false,
          error: null
        })
      );
    } catch (error) {
      console.error("Error updating params:", error);
    }
  };
  return (
    <div className={`admin__content ${isOpen ? "open" : ""}`}>
      {RenderedComponent && (
        <RenderedComponent handleSave={handleSave} params={params} />
      )}
    </div>
  );
};

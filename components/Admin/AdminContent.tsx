import { General } from "./General";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { About } from "./About";
import { AdminStaff } from "./AdminStaff";
import { AdminMeatProcess } from "./AdminMeatProcess";
import { ParamsQuery } from "@/typings";
import { useMutation } from "@apollo/client";
import {
  updateParamsMutation,
  createStaffMutation,
  updateStaffMutation,
  createMeatProcessMutation,
  updateMeatProcessMutation
} from "../../utils/mutations";
import { useAppDispatch } from "@/hooks/redux";
import { fetchDataSuccess } from "@/lib/redux";
import { toast } from 'react-toastify';

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
  About,
  AdminStaff,
  AdminMeatProcess
};

export const AdminContent = ({ isOpen, renderModule, params }: props) => {
  const dispatch = useAppDispatch();
  const RenderedComponent = componentMap[renderModule];
  const [updateParams] = useMutation(updateParamsMutation);
  const [createStaff] = useMutation(createStaffMutation);
  const [updateStaff] = useMutation(updateStaffMutation);
  const [createMeatProcess] = useMutation(createMeatProcessMutation);
  const [updateMeatProcess] = useMutation(updateMeatProcessMutation);
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

  const mutationFunctions = {
    createStaff: {
      function: createStaff,
      variableName: 'createStaffInput2'
    },
    updateStaff: {
      function: updateStaff,
      variableName: 'updateStaffInput2'
    },
    createMeatProcess: {
      function: createMeatProcess,
      variableName: 'createMeatProcessInput2'
    },
    updateMeatProcess: {
      function: updateMeatProcess,
      variableName: 'updateMeatProcessInput2'
    },
  };

  const handleSaveForm = async (id: string | undefined, values: any, mutationName: string, reloadData?: (data: any) => void) => {
    const selectedMutation = mutationFunctions[mutationName as keyof typeof mutationFunctions];
    try {
      const { function: mutationFunction, variableName } = selectedMutation;
      if (!selectedMutation) {
        toast.error('Error');
        throw new Error('Mutation function is undefined');
      }
      const sendValues = { ...values } as any;
      delete sendValues?.staffData;
      delete sendValues?.meatData;
      const { data } = await mutationFunction({
        variables: {
          [variableName as string]: {
            id: id,
            ...sendValues
          }
        }
      });
      if (reloadData) {
        reloadData(data);
      }
      toast.success('Creado correctamente', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    } catch (error) {
      console.error("Error updating params:", error);
    }
  };
  return (

    <div className={`admin__content ${isOpen ? "open" : ""}`}>
      {RenderedComponent && (
        <RenderedComponent handleSave={handleSave} handleSaveForm={handleSaveForm} params={params} />
      )}
    </div>
  );
};

"use client";
import { useAppDispatch } from "@/hooks/redux";
import { signOutAction } from "@/lib/firebase/auth/loginActions";
import { setUser } from "@/lib/redux";
import { useRouter } from "next/navigation";
import WithAuth from "../../../components/routes/ProtectedRoute";
import { useState } from "react";
import { Sidebar } from "@/components/Admin/Sidebar";
import { AdminContent } from "@/components/Admin/AdminContent";
import MenuOptions from "@/enum";
import { useQuery } from "@apollo/client";
import { queryGetParams } from "@/utils/querys";
import { ParamsQuery } from "@/typings";

function Page() {
  const { loading, error, data } = useQuery<ParamsQuery>(queryGetParams);
  const router = useRouter();
  const [url, setUrl] = useState("");
  const dispatch = useAppDispatch();
  const logOut = async () => {
    await signOutAction();
    dispatch(setUser(null));
    localStorage.removeItem("token");
    return router.push("/login");
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminOption, setAdminOption] = useState<MenuOptions>(MenuOptions.Option1)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMenuItemClick = (option: MenuOptions) => {
    setAdminOption(option);   
  };
  return (
    <>
    {/* <button style={{marginLeft: 200, zIndex: 20}} onClick={logOut}>Log out</button> */}
    <Sidebar isOpen={sidebarOpen} activeModule={adminOption} toggleSidebar={toggleSidebar} handleMenuItemClick={handleMenuItemClick}/>
    <AdminContent isOpen={sidebarOpen} renderModule={adminOption} params={data}/>
    </>
  );
}

export default WithAuth(Page);

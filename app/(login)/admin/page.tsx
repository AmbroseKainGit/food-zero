"use client";
import { useAppDispatch } from "@/hooks/redux";
import { signOutAction } from "@/lib/firebase/auth/loginActions";
import { setUser } from "@/lib/redux";
import { useRouter } from "next/navigation";
import WithAuth from "../../../components/routes/ProtectedRoute";

function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const logOut = async () => {
    await signOutAction();
    dispatch(setUser(null));
    return router.push("/");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">ADMIN</h1>
        <h3 className="mt-60 mb-30">LOG OUT</h3>
        <button onClick={logOut}> LOG OUT</button>
      </div>
    </div>
  );
}

export default WithAuth(Page);

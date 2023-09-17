"use client";
import { useAppDispatch } from "@/hooks/redux";
import { signOutAction } from "@/lib/firebase/auth/loginActions";
import { setUser } from "@/lib/redux";
import { useRouter } from "next/navigation";
import WithAuth from "../../../components/routes/ProtectedRoute";
import { uploadImage } from "@/utils/uploadImageUtil";
import { useState } from "react";
import { url } from "inspector";
import { set } from "firebase/database";
import Image from "next/image";

function Page() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const dispatch = useAppDispatch();
  const logOut = async () => {
    await signOutAction();
    dispatch(setUser(null));
    return router.push("/login");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">ADMIN</h1>
        <h3 className="mt-60 mb-30">LOG OUT</h3>
        <button onClick={logOut}> LOG OUT</button>
        <input
          type="file"
          name="test"
          id="test"
          onChange={async (ev) => setUrl((await uploadImage(ev)) || "")}
          accept="image/png, image/jpeg"
        />
      </div>
      <img style={{width: 200, height: 200}} src={url} alt="test" />
    </div>
  );
}

export default WithAuth(Page);

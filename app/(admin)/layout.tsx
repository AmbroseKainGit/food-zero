"use client";
import { useAppDispatch } from "@/hooks/redux";
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/lib/firebase/firebase";
import { setUser } from "@/lib/redux";
type Props = {
  children: React.ReactNode;
};
const auth = getAuth(firebase_app);
export default function Layout({ children }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user?.getIdToken();
        localStorage.setItem("token", token);
        dispatch(
          setUser({
            email: user?.email,
            uid: user?.uid
          })
        );
        return;
      }
      localStorage.removeItem("token");
      dispatch(setUser(null));
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      {children}
    </>
  );
}

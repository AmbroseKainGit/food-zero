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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user?.email,
            uid: user?.uid
          })
        );
        return;
      }
      dispatch(setUser(null));
    });
    return () => unsubscribe();
  }, [dispatch]);
  return <>{children}</>;
}

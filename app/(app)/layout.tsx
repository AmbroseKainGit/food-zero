"use client"
import Cover from "@/components/General/Cover";
import { Footer } from "@/components/General/Footer";
import { NavComponent } from "@/components/General/NavComponent";
import { useQuery } from "@apollo/client";
import { queryGetParams } from "@/utils/querys";
import { ParamsQuery } from "@/typings";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { fetchDataSuccess } from "@/lib/redux";

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { loading, error, data } = useQuery<ParamsQuery>(queryGetParams);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchDataSuccess({
        data: data!,
        loading,
        error: error?.cause
      })
    );
  }, [data, loading, error, dispatch]);
  
  return (
    <main>
      <Cover />
      <NavComponent />
      {children}
      <Footer />
    </main>
  );
}

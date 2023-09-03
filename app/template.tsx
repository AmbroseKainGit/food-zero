"use client";
import Cover from "@/components/General/Cover";
import { useAppSelector } from "@/hooks/redux";
import { selectCover } from "@/lib/redux";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const showCover = useAppSelector(selectCover);
  
  useEffect(() => {
    document.body.style.overflowY = showCover ? 'hidden' : 'unset';
    document.body.style.height = showCover ? '100vh' : 'auto';
    return () => {
      document.body.style.overflowY = 'unset'; 
      document.body.style.height = 'unset'; 
    };
  }, [showCover]);
  return (
    <>
      <Cover />
      <div className={`main-container-template ${showCover ? 'hide' : ''}`}>
        {children}
      </div>
    </>
  );
}

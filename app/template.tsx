"use client";
import Cover from "@/components/General/Cover";
import { useAppSelector } from "@/hooks/redux";
import { selectCover } from "@/lib/redux";

export default function Template({ children }: { children: React.ReactNode }) {
  const showCover = useAppSelector(selectCover);
  return (
    <>
      <Cover />
      <div className={`main-container-template ${showCover ? 'hide' : ''}`}>
        {children}
      </div>
    </>
  );
}

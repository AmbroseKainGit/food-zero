"use client";
import { Header } from "@/components/Home/Header";
import { useAppSelector } from "@/hooks/redux";
import { selectCover } from "@/lib/redux";
export default function Landing() {
  return (
    <div className="main-header-container">
      <Header />
    </div>
  );
}

import { Providers } from "@/lib/providers";
import "./styles/index.scss";
import type { Metadata } from "next";
import { lato, rufina } from "./fonts";
import { NavComponent } from "@/components/General/NavComponent";
import { Footer } from "@/components/General/Footer";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import Cover from "@/components/General/Cover";



export const metadata: Metadata = {
  title: "Food Zero",
  description: "Food Zero"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={`${lato.variable} ${rufina.variable}`}>
        <body>
          <Cover />
          <NavComponent />        
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

import { Providers } from "@/lib/providers";
import "./styles/index.scss";
import type { Metadata } from "next";
import { lato, rufina } from "./fonts";
import { MenuComponent } from "@/components/General/MenuComponent";
import { Footer } from "@/components/General/Footer";

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
          <MenuComponent />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

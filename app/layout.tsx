import { Providers } from "@/lib/providers";
import "./styles/index.scss";
import type { Metadata } from "next";
import { lato, rufina } from "./fonts";
import { MenuComponent } from "@/components/General/MenuComponent";
import { Footer } from "@/components/General/Footer";
import { HeaderComponent } from "@/components/General/HeaderComponent";
HeaderComponent

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
          <HeaderComponent
            title={'View Our New Menu'}
            titleFontSize={14.8}
            description={'The fresh ingredients for you every day'}
            descriptionFontSize={3.2}
            ubication={'left'}
            showOpenTime={true}
            textAling={'left'}
            textContainerWidth={55}
          />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

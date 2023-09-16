import Cover from "@/components/General/Cover";
import { Footer } from "@/components/General/Footer";
import { NavComponent } from "@/components/General/NavComponent";

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Cover />
      <NavComponent />
      {children}
      <Footer />
    </main>
  );
}

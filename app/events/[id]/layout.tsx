import type { Metadata } from "next";
import CustomNavbar from "@/components/navbar";
import TopScrollBar from "@/components/ui/topScrollBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "IEEE Ashoka | Event",
  description: "IEEE Ashoka | Event",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopScrollBar />
      <CustomNavbar />
      {children}
      <Footer />
    </main>
  );
}

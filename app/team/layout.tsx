import type { Metadata } from "next";
import CustomNavbar from "@/components/navbar";
import TopScrollBar from "@/components/ui/topScrollBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "IEEE Ashoka | Team",
  description: "IEEE Ashoka | Team",
};

export default function TeamLayout({
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

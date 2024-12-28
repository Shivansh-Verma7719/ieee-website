import type { Metadata } from "next";
import CustomNavbar from "@/components/navbar";
import TopScrollBar from "@/components/ui/topScrollBar";

export const metadata: Metadata = {
  title: "IEEE Ashoka | Contact",
  description: "IEEE Ashoka | Contact",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen overflow-hidden">
      <TopScrollBar />
      <CustomNavbar />
      {children}
    </main>
  );
}

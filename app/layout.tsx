import type { Metadata } from "next";
import "./globals.css";
import CustomNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import TopScrollBar from "@/components/ui/topScrollBar";

export const metadata: Metadata = {
  title: "IEEE Ashoka Website",
  description: "IEEE Ashoka Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopScrollBar />
        <CustomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

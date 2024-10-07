import type { Metadata } from "next";
import "./globals.css";
import CustomNavbar from "@/components/navbar";
export const metadata: Metadata = {
  title: "IEEE Website",
  description: "IEEE Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
      </body>
    </html>
  );
}

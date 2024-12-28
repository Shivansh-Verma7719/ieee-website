import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEEE Ashoka",
  description: "IEEE Ashoka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <TopScrollBar />
        <CustomNavbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEEE Ashoka | Event",
  description: "IEEE Ashoka | Event",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event | IEEE Ashoka",
  description: "Event | IEEE Ashoka",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

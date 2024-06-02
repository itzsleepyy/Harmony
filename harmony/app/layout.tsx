import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const Font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Development Of Harmony",
  description: "The begining Stages of Harmony",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  );
}

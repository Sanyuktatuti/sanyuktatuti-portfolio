import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanyukta Tuti | ML/AI Engineer",
  description:
    "Portfolio showcasing expertise in Machine Learning, Deep Learning, Computer Vision, and Artificial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}

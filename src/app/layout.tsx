import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aditya Chaudhary | Software Engineer & MS CS Student",
  description:
    "Software Engineer & MS CS Student at USC with expertise in full-stack development, algorithms, and machine learning & genAI",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "USC",
    "Machine Learning",
    "AI",
    "React",
    "Node.js",
    "Python",
  ],
  authors: [{ name: "Aditya Chaudhary" }],
  creator: "Aditya Chaudhary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityac.com",
    title: "Aditya Chaudhary | Software Engineer & MS CS Student",
    description:
      "Software Engineer & MS CS Student at USC with expertise in full-stack development, algorithms, and machine learning & genAI",
    siteName: "Aditya Chaudhary Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        <main className="relative min-h-screen bg-[#030014] overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}

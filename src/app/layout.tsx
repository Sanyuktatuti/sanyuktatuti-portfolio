import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanyukta Tuti | ML/AI Engineer & MS CS Student",
  description:
    "ML/AI Engineer & MS CS Student at NYU with expertise in deep learning, natural language processing, computer vision, data science, and generative AI.",
  keywords: [
    "Sanyukta Tuti",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Generative AI",
    "NYU",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Langchain/LangGraph",
  ],
  authors: [{ name: "Sanyukta Tuti" }],
  creator: "Sanyukta Tuti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanyuktatuti.com", // replace with your custom domain or vercel URL
    title: "Sanyukta Tuti | ML/AI Engineer & MS CS Student",
    description:
      "Portfolio of Sanyukta Tuti — ML/AI Engineer & MS CS Student at NYU specializing in deep learning, CV, NLP, and data science.",
    siteName: "Sanyukta Tuti Portfolio",
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

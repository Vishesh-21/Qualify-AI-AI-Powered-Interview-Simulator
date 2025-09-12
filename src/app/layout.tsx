import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Qualify AI – AI-Powered Interview & Feedback Tool",
  description:
    "Qualify AI is an intelligent interview assistant that conducts mock interviews, evaluates responses, and provides detailed feedback to help you prepare for real-world job opportunities.",
  keywords: [
    "AI interview",
    "mock interview",
    "job preparation",
    "interview feedback",
    "Qualify AI",
    "AI career assistant",
    "practice interviews",
    "career growth",
    "interview practice tool",
  ],
  authors: [
    {
      name: "Vishu Verma",
      url: "https://vishesh-s-developer-portfolio.vercel.app/",
    },
  ],
  publisher: "Qualify AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressContentEditableWarning={true}>
        <body className={`${poppins.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

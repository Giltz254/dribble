import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KipDEV Shots: Showcasing Creative Brilliance in Design",
  description:
    "An impressive Dribbble-inspired platform for showcasing, discovering, and connecting with talented designers worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-[100vh] flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

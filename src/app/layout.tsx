import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/libs/SmoothScroll";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Institute",
  description:
    "Explore the achievements and academic excellence at Global Institute.",
  keywords:
    "global institute, academic excellence, achievements, awards, education, research",
  authors: [{ name: "Global Institute", url: "https://global.ac.id" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://global.ac.id",
    title: "Global Institute - Achievements and Academic Excellence",
    description:
      "Discover the prestigious awards and academic programs at Global Institute.",
    images: [
      {
        url: "https://i0.wp.com/global.ac.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-14.59.03.jpeg?fit=1600%2C800&ssl=1",
        width: 1200,
        height: 630,
        alt: "Global Institute Campus",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}

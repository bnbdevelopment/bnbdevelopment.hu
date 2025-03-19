import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BNBDEVELOPMENT",
  description: "Portfolio website for bnbdevelopment",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode}>) {

  return (
    <html lang="hu" className="dark">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

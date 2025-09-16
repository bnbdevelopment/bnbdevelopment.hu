import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "BNBDEVELOPMENT",
  description: "Portfolio website for bnbdevelopment",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode}>) {

  return (
    <html lang="hu" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

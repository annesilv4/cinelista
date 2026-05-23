import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/app/components/Header/index";
import Footer from "@/app/components/Footer/index";

export const metadata: Metadata = {
  title: "Cinelista",
  description: "Filmes e séries em seu lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Head />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientWrapper from "./components/client-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Homepage",
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} cz-shortcut-listen="true">
        <Navbar />
        <div className="pt-[100px]">
          <ClientWrapper>{children}</ClientWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}

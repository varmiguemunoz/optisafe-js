import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import TopBar from "../components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptiSafe Next App",
  description: "Author varmiguemunoz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar image="https://picsum.photos/300/300" />
        <main className="mx-auto max-w-[1114px]">{children}</main>
      </body>
    </html>
  );
}

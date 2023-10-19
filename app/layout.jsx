import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Providers from "./_providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jorge's news",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="dark:bg-[#9723c9] min-h-[calc(100vh-80px)]">
            {children}
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

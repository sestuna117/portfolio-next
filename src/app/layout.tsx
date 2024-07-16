import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DesignModalButton } from "@/app/_components/DesignModalButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const gunterz = localFont({
  src: "../../public/fonts/Gunterz-Medium.otf",
  variable: "--font-gunterz",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gunterz.variable} font-gunterz`}>
      <body
        className={`after:wiper after:translate-y-full 
          before:wiper before:-translate-y-full
          `}
      >
        {children}
        <DesignModalButton />
      </body>
    </html>
  );
}

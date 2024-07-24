import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DesignModalButton } from "@/components/DesignModal/DesignModalButton";

export const metadata: Metadata = {
  title: "Next.js Portfolio",
  description: "Web developer portfolio page testing Next.js and Tailwind CSS",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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

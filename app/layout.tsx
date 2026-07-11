import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NivitHub - Coming Soon",
  description: "We're crafting an innovative digital experience to help you do more, faster.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${plusJakarta.className} h-full w-full overflow-hidden bg-[#f8f9fc] text-[#090d1f] flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

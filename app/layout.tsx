import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma & Line | Designer Lighting Store",
  description:
    "A premium lighting ecommerce experience for pendants, chandeliers, floor lamps, table lamps, sconces, outdoor lanterns, and smart lighting.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

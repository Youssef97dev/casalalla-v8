import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Casa Lalla Takerkoust",
  description: "Exquisite cuisine and amazing panoramic view",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}

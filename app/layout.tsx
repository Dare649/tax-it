import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/page";



export const metadata: Metadata = {
  title: "Tax iT - Pay",
  description: "Payment made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

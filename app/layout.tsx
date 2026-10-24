
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaBeat | Your Sound. Your Legacy.",
  description:
    "Discover premium beats, explore licenses, and find your next signature sound at MaBeat.",
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

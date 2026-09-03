import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: ".txt - Structured Outputs for Production LLMs",
  description:
    "Structured generation libraries for developers and AI teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { StorybookShell } from "@/storybook/StorybookShell";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Roboto Flex is needed for Variable Proximity component
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  axes: ["opsz"], // Enable optical size axis (weight is included by default)
});

export const metadata: Metadata = {
  title: "One For All",
  description:
    "A Storybook-style catalog of interesting UI components from around the web.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${jetBrainsMono.variable} ${robotoFlex.variable} antialiased`}
        suppressHydrationWarning
      >
        <StorybookShell>{children}</StorybookShell>
      </body>
    </html>
  );
}

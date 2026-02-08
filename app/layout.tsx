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
    icon: "/logo.svg",
    apple: "/logo.svg",
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

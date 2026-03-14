import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const baseUrl = "https://shahzeb-portfolio.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Muhammad Shahzeb | Full-Stack Developer & UI/UX Designer",
    template: "%s | Muhammad Shahzeb",
  },
  description: "Explore the portfolio of Muhammad Shahzeb, a passionate Full-Stack Developer and UI/UX Designer specializing in building elite web experiences and robust systems.",
  keywords: [
    "Muhammad Shahzeb",
    "Shahzeb Portfolio",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Web Development",
    "Next.js Portfolio",
    "React Developer",
    "MERN Stack",
    "System Observer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Muhammad Shahzeb" }],
  creator: "Muhammad Shahzeb",
  publisher: "Muhammad Shahzeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Muhammad Shahzeb",
    title: "Muhammad Shahzeb | Full-Stack Developer & UI/UX Designer",
    description: "Explore the portfolio of Muhammad Shahzeb, showcasing elite web experiences and robust systems.",
    images: [
      {
        url: "/og-image.png", // Ensure you have an image at public/og-image.png
        width: 1200,
        height: 630,
        alt: "Muhammad Shahzeb Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahzeb | Full-Stack Developer & UI/UX Designer",
    description: "Explore the portfolio of Muhammad Shahzeb, showcasing elite web experiences and robust systems.",
    images: ["/og-image.png"],
    creator: "@shahzeb_dev", // Update with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional: Add this to public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: 'font-mono text-xs uppercase tracking-widest bg-surface border border-outline text-foreground',
              duration: 4000,
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

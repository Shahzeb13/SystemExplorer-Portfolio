import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Portfolio | Muhammad Shahzeb",
  description: "Portfolio of System Observer",
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

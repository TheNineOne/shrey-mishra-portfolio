import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrey Mishra Portfolio",
  description: "Personal portfolio of Shrey Mishra, a specialized Java and Spring Boot developer building scalable web applications.",
  keywords: ["Java Developer", "Spring Boot", "React", "Shrey Mishra", "Backend Developer", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

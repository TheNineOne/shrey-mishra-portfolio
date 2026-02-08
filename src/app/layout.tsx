import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrey Mishra | Backend Developer",
  description: "Personal portfolio of Shrey Mishra, a specialized Java and Spring Boot developer building scalable web applications.",
  keywords: ["Java Developer", "Spring Boot", "REST APIs", "Shrey Mishra", "Backend Developer", "Java OOP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} antialiased selection:bg-primary/30 selection:text-primary dark:selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(5,99,187,0.15),rgba(0,0,0,0))]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


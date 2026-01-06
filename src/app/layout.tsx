import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/ThemeProvider";

import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import InitialLoader from "@/src/components/ui/InitialLoader";

export const metadata = {
  title: "Matthes sagt hallo👋",
  description: "Krasse Beschreibungen hier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <div className="flex min-h-screen flex-col font-sans text-slate-800 selection:bg-blue-100">
          <Header />

          <InitialLoader />

          <main className="flex-grow">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

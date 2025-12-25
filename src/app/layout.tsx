import "@/src/styles/globals.css";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

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
    <html lang="de">
      <body>
        <div className="flex min-h-screen flex-col font-sans text-slate-800 selection:bg-blue-100">
          <Header />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

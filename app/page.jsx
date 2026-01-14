import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KNGO",
  description: "Win big with skill-based football competitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* CLEAN HEADER */}
        <header className="w-full bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="font-bold text-lg">
              KNGO
            </div>

            <nav className="space-x-6 text-sm">
              <Link href="/competitions" className="hover:underline">
                Competitions
              </Link>
              <Link href="/winners" className="hover:underline">
                Winners
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}

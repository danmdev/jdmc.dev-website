import { Metadata } from "next";
import "../styles/globals.css";
import { Lexend } from "next/font/google";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Moo - Full Stack Developer",
  description:
    "Hi, I am Daniel Moo, a Full Stack Developer from Mexico. I am passionate about building web applications and learning new technologies.",
  icons: "/developer.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-1`}>
        {children}
        <footer className="flex flex-col items-center justify-center gap-2 mt-2 bg-gray-50">
          <p className="text-sm text-gray-500 text-center mt-1">
            <b>JDMC.DEV - {new Date().getFullYear()}.</b> All rights reserved.
            <br />
            <a
              href="mailto:info@jdmc.dev"
              className="text-blue-600 hover:underline"
            >
              contact@jdmc.dev
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

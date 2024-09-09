'use client'
import { Inter } from "next/font/google";
import { MoviesProvider } from "./contexts/MoviesContext";
import { AuthProvider } from "./contexts/AuthContext";
import './style.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <AuthProvider>
            <MoviesProvider>
              {children}
            </MoviesProvider>
          </AuthProvider>
      </body>
    </html>
  );
}

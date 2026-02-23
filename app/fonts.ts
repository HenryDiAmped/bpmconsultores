import { Geist, Geist_Mono, Bricolage_Grotesque, Inter } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Bricolage Grotesque
export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
})

//Inter
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})
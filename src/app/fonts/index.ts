import { Lexend, Nunito } from "next/font/google";
import localFont from "next/font/local";

export const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const svn_arco = localFont({
  src: "./SVN-ARCO.otf",
  display: "swap",
});

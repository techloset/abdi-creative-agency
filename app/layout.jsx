import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Creative Agency",
  description: "This is the Creative Agency website made by abdiopp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-main-bg`}>
        {children}
      </body>
    </html>
  );
}

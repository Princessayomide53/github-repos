import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Practice",
  description: "Tutorial by Traversy Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

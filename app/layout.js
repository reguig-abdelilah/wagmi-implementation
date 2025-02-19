import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { WalletProvider } from "./context/WalletContext";
import { WagmiWrapper } from "./WagmiWrapper";
import WalletList from "./components/WalletList";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tokenizer",
  description: "Tokenize your assets with ease",
};

export default function Layout({ children }) {
  return (
    <html ang="en">
      <body>
        <WagmiWrapper>
          <WalletProvider>
            <Navbar />
            <WalletList />
            <main className="p-6">{children}</main>
          </WalletProvider>
        </WagmiWrapper>
      </body>
    </html>
  );
}

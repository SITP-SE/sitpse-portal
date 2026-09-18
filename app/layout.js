import { IBM_Plex_Sans, Sora } from "next/font/google";
import DiscoveryModal from "@/components/DiscoveryModal";
import { DiscoveryModalProvider } from "@/components/DiscoveryModalContext";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "SITP Social Enterprise — Modern Technology. Rapidly Implemented.",
  description:
    "SITP helps organizations rapidly adopt and implement modern technology in web development, e-commerce, business automation, cybersecurity and artificial intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${sora.variable}`}>
      <body>
        <DiscoveryModalProvider>
          {children}
          <DiscoveryModal />
        </DiscoveryModalProvider>
      </body>
    </html>
  );
}

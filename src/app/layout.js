import "./globals.css";
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/FormStyle.css'
import ParticlesBackground from "@/components/ParticlesBackground";
import Waves from "@/components/WaveAnimation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Authentication Form",
  description: "Authentication Login and Signup form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="section-bg">
        <ParticlesBackground />
        <CustomProvider>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
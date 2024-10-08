import "./globals.css";
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/FormStyle.css'
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "Authentication Form",
  description: "Authentication Login and Signup form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="section-bg" style={{height:'100vh'}}>
        <CustomProvider>
          <ParticlesBackground />
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
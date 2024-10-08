"use client";
import "./globals.css";
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/FormStyle.css';
import { useEffect } from 'react';

// export const metadata = {
//   title: "Authentication Form",
//   description: "Authentication Login and Signup form",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    // Load Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body className="section-bg">
        <CustomProvider>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}

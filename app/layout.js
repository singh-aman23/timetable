import "./globals.css";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  weight: ['400', '600'],  // Include the font weights you need
  subsets: ['latin'],      // You can add more subsets if necessary
  display: 'swap',         // Improves font loading performance
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

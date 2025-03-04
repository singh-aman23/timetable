import "./globals.css";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  weight: ['400', '600'],  
  subsets: ['latin'],      
  display: 'swap',         
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

import './globals.css'
import { Inter } from 'next/font/google'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from '@/lib/Context';
import ToasterPage from '@/components/Toaster';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'theoyoth clothing',
  description: 'clothing website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <title>theoyoth clothing</title>
        <CartProvider>
          <ToasterPage />
          <Navbar />
            {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

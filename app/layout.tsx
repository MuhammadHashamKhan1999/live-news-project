import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ChakraProvider } from '@/providers/ChakraProvider';
import Header from '@/components/header/Header';
import { ModalProvider } from '@/contexts/ModalContext';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIP LIVEALERTS-PRO',
  description: 'VIP LIVEALERTS-PRO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ChakraProvider>
            <Header />
            <ModalProvider>
            {children}
            </ModalProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}

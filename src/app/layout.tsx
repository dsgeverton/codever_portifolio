import './globals.css'
import type { Metadata } from 'next'
import { Inter, Borel, Roboto } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300' ,'400', '700'] })

export const metadata: Metadata = {
  title: 'Codever Group',
  description: 'Codever Group',
}

interface IProps {children: React.ReactNode}

export default function RootLayout({children}: IProps) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}

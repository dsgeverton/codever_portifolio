import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300' ,'400', '700'] })

export const metadata: Metadata = {
  title: 'Codever Group',
  description: 'Codever Group',
}

interface IProps {children: React.ReactNode}

export default function RootLayout({children}: IProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}

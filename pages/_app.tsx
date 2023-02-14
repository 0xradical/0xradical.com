import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} font-sans container h-screen flex flex-col mx-auto py-16 px-4`}
    >
      <Component {...pageProps} />
    </main>
  )
}

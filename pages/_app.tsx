import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Barlow_Condensed } from '@next/font/google'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  variable: '--font-barlow',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${barlow.variable} font-sans font-extralight container h-screen flex flex-col mx-auto py-16 px-4`}
    >
      <Component {...pageProps} />
    </main>
  )
}

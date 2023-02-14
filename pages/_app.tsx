import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${oswald.variable} font-sans font-extralight container h-screen flex flex-col mx-auto py-16 px-4`}
    >
      <Component {...pageProps} />
    </main>
  )
}

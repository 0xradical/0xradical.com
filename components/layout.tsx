import { ReactNode } from 'react'
import { Barlow_Condensed } from '@next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import links from '@/data/links.json'
import social from '@/data/social.json'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  variable: '--font-barlow',
})

function SocialMedia() {
  return (
    <>
      {['github', 'linkedin', 'twitter'].map((value) => {
        const platform = value as keyof typeof social

        return (
          <li key={platform}>
            <Link
              target="_blank"
              href={social[platform].url}
              rel="noopener noreferer"
              aria-label={`my ${platform}`}
            >
              <Image
                src={`/${platform}.svg`}
                width="16"
                height="16"
                alt={`${platform}'s icon`}
              />
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`${barlow.variable} font-sans font-extralight container h-screen flex flex-col mx-auto py-16 px-4`}
    >
      <Head>
        <title>0xradical</title>
        <meta name="description" content="0xradical" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="md:hidden grid grid-cols-12 gap-x-8 gap-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            className="col-span-4 text-center border border-radix hover:text-surface hover:bg-radix py-2 rounded-sm uppercase"
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </header>
      <div className="grid grid-cols-12 gap-8 flex-1">
        <nav className="hidden md:block col-span-4">
          <ul className="flex items-end flex-col space-y-2 pr-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block uppercase font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </ul>

          <ul className="flex flex-col items-end pr-4 mt-8 space-y-4">
            <li>
              <ul className="flex space-x-1 justify-end">
                <SocialMedia />
              </ul>
            </li>
            <li className="flex items-end flex-col">
              <div className="font-semibold">location</div>
              <div>{social.location.url}</div>
            </li>
            <li className="flex items-end flex-col">
              <div className="font-semibold">email</div>
              <div>{social.email.url}</div>
            </li>
          </ul>
        </nav>
        <div className="col-span-12 md:col-span-8 max-md:mt-10">{children}</div>
      </div>
    </main>
  )
}

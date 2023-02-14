import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import links from '@/data/links.json'

export default function Home() {
  return (
    <>
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
          <ul className="flex items-end flex-col space-y-4 pr-4">
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

          <ul className="flex flex-col items-end pr-4 mt-8 space-y-8">
            <li>
              <div className="font-semibold">0xradical</div>
              <ul className="flex space-x-1 justify-end">
                <li>
                  <Link
                    className="a-mr(0.25em)"
                    target="_blank"
                    href="https://github.com/0xradical"
                    rel="noopener noreferer"
                    aria-label="my github"
                  >
                    <Image
                      src="./github.svg"
                      className="sidebar-social"
                      width="16"
                      height="16"
                      alt="Github's Icon"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    className="a-mr(0.25em)"
                    target="_blank"
                    href="https://twitter.com/0xradical"
                    rel="noopener noreferer"
                    aria-label="my twitter"
                  >
                    <Image
                      src="./twitter.svg"
                      className="sidebar-social"
                      width="16"
                      height="16"
                      alt="Twitter's Icon"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://linkedin.com/in/thiagobrandam/"
                    rel="noopener noreferer"
                    aria-label="my linkedin"
                  >
                    <Image
                      src="./linkedin.svg"
                      className="sidebar-social"
                      width="16"
                      height="16"
                      alt="Linkedin's Icon"
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-end flex-col">
              <div className="font-semibold">location</div>
              <div className="sidebar-info-list-item-value">
                Florianópolis, Brazil
              </div>
            </li>
            <li className="flex items-end flex-col">
              <div className="font-semibold">contact</div>
              <div className="sidebar-info-list-item-value">contact(at)</div>
              <div className="sidebar-info-list-item-value">
                0xradical(dot)com
              </div>
            </li>
          </ul>
        </nav>
        <div className="col-span-12 md:col-span-8 max-md:mt-10">Hello</div>
      </div>
    </>
  )
}

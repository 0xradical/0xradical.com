import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'

export default function Home() {
  return (
    <section>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 underline"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  )
}

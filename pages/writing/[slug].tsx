import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { allBlogs, Blog } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'

const components = {}

export default function Post({ doc }: { doc: Blog }) {
  const post = allBlogs.find((post) => post.slug === doc.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <section>
      <h1 className="text-3xl">
        <Balancer>{doc.title}</Balancer>
      </h1>
      <article className="font-serif mt-4 prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXContent components={components} />
      </article>
    </section>
  )
}

export const getStaticProps = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  const doc = allBlogs.find((d) => d._raw.flattenedPath === slug)
  return { props: { doc } }
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((d) => ({ params: { slug: d.slug } })),
    fallback: false, // can also be true or 'blocking'
  }
}

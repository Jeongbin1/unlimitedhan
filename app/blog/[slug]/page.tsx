import { notFound } from 'next/navigation';
import { posts } from '#site/content';
import * as runtime from 'react/jsx-runtime';
import { Metadata } from 'next';

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.cleanSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.cleanSlug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.cleanSlug === slug);
  if (!post) return notFound();

  const Component = getMDXComponent(post.content);

  return (
    <article className="prose prose-slate dark:prose-invert flex flex-col max-w-none px-10 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <Component />
    </article>
  );
}

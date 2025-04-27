import { posts } from '#site/content';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPosts() {
  const featuredPosts = posts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <>
      <h1 className=" text-[2.6rem] font-cooper mb-6 text-primary">
        Featured Posts
      </h1>
      <ul className="space-y-4">
        {featuredPosts.map((post) => (
          <li key={post.slug} className="border-b pb-4 group">
            <Link href={post.permalink} className="flex justify-between">
              <div className="flex flex-col gap-2 justify-center">
                <h2 className="text-[1.375rem] font-semibold text-black/80 group-hover:text-secondary/80 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-xs">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </p>
                <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
              </div>
              <Image
                width={500}
                height={500}
                src={post.cover}
                alt={post.title}
                className="object-cover w-32 h-32"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import { posts } from '#site/content';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="flex flex-col px-4 py-8 md:px-10 md:py-16 min-h-screen">
      <h1 className=" text-[2.6rem] font-cooper mb-6 text-primary">BLOG</h1>
      <ul className="space-y-4">
        {posts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post) => (
            <li key={post.slug} className="border-b pb-4 group">
              <Link
                href={post.permalink}
                className="flex gap-1 md:gap-0 justify-between"
              >
                <div className="flex flex-col gap-1 md:gap-2 justify-center">
                  <h2 className="text-base md:text-[1.375rem] font-semibold text-black/80 group-hover:text-secondary/80 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </p>
                  <p className="mt-1 md:mt-3 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <Image
                  width={500}
                  height={500}
                  src={post.cover}
                  alt={post.title}
                  className="object-cover w-28 h-28 md:w-32 md:h-32"
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

import { defineConfig, s } from 'velite';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  collections: {
    posts: {
      name: 'Post', // collection type name
      pattern: path.join(process.cwd(), 'contents/blog/*.mdx'), // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          //   slug: s.slug('content/blog'), // validate format, unique in posts collection
          slug: s.path(), // auto generate slug from file path
          date: s.isodate(), // input Date-like string, output ISO Date string.
          cover: s.string(), // input image relative path, output image object with blurImage.
          // video: s.file().optional(), // input file relative path, output file public path.
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          excerpt: s.excerpt(), // excerpt of markdown content
          content: s.mdx(), // transform markdown to html
          featured: s.boolean().optional(),
        })
        // more additional fields (computed fields)
        .transform((data) => {
          const rawSlug = data.slug.replace(/^(\.\.\/)*contents\/blog\//, '');
          const cleanSlug = rawSlug.replace(/\.mdx$/, '');
          return {
            ...data,
            cleanSlug,
            permalink: `/blog/${cleanSlug}`,
          };
        }),
    },
  },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'slack-dark',
          keepBackground: true,
        },
      ],
    ],
  },
});

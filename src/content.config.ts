import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are plain Markdown files in src/content/blog/<slug>.md.
// The Agent OS SEO pipeline writes them there; the slug is the file name.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Local SEO'),
    keywords: z.string().optional(),
    author: z.string().default('Brand Hyve'),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pillar: z.enum(['able-accounts', 'benefits', 'planning-tools', 'everyday-money']),
    tier: z.enum(['tier-1', 'tier-2']),
    state: z.string().optional(),
    lastUpdated: z.string(),
    reviewerName: z.string().optional(),
    reviewerCredential: z.string().optional(),
    reviewerDate: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };

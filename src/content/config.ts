import { defineCollection, z } from 'astro:content';

const wrestling = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		pinned: z.boolean().optional(),
		notCompleted: z.boolean().optional(),
	}),
});

const project = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		pinned: z.boolean().optional(),
		notCompleted: z.boolean().optional(),
	}),
});

export const collections = { wrestling, project };

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/assets/markdown/projects",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/), // Validates format DD-MM-YYYY
			live: z.boolean(),
			technologies: z.array(z.string()),
			links: z
				.object({
					github: z.string().url().optional(),
					website: z.string().url().optional(),
				})
				.optional(),
			images: z.object({
				light: z.array(image()),
				dark: z.array(image()).optional(),
			}),
		}),
});

export const collections = { projects };

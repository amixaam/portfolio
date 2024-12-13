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
			year: z.number(),
			live: z.boolean(),

			technologies: z.array(z.string()),

			links: z
				.object({
					github: z.string().url().optional(),
					website: z.string().url().optional(),
				})
				.optional(),

			images: z.object({
				darkMode: z.boolean().optional(),
				images: z.array(image()),
			}),
		}),
});

export const collections = { projects };

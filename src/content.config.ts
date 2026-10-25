import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      sortOrder: z.number(),
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean(),
      description: z.string(),
      period: z.string(),
      client: z.string(),
      location: z.string(),
      category: z.string().optional(),
      member: z.enum(["Spyros Gavriilidis", "Diogo Pereira"]),
    }),
});

export const collections = {
  projects: projectsCollection,
};

import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
    return [...new Set(array.map((str) => str.toLowerCase()))];
}

const titleSchema = z.string().max(60);

const baseSchema = z.object({
    title: titleSchema,
});

const postsCollection = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/posts" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            published: z.coerce.date(),
            // updated: z.coerce.date().optional(),
            draft: z.boolean().optional().default(false),
            description: z.string().optional(),
            author: z.string().optional(),
            series: z.string().optional(),
            tags: z.array(z.string()).optional().default([]),
            coverImage: z
                .strictObject({
                    src: image(),
                    alt: z.string(),
                })
                .optional(),
            toc: z.boolean().optional().default(true),
        }),
});

const homeCollection = defineCollection({
    loader: glob({ pattern: ["home.md", "home.mdx"], base: "./src/content" }),
    schema: ({ image }) =>
        z.object({
            avatarImage: z
                .object({
                    src: image(),
                    alt: z.string().optional().default("My avatar"),
                })
                .optional(),
            githubCalendar: z.string().optional(), // GitHub username for calendar
        }),
});

const socialsCollection = defineCollection({
    loader: file("./src/content/data/socials.toml"),
    schema: z.array(
        z.object({
            friendlyName: z.string(),
            link: z.string(),
            name: z.string(),
        }),
    ),
});
const gentreeCollection = defineCollection({
    loader: file("./src/content/data/gen_tree.json"),
    // schema: z.object({
    //     root: z.string(),
    //     tree: z.object({
    //         name: z.string(),
    //         year: z.number().optional(),
    //         school: z.string().optional(),
    //         parents: z.array(z.string()).optional(),
    //     }),
    // ),
});

const slidesCollection = defineCollection({
    loader: glob({ base: "./src/content/slides", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: titleSchema,
        description: z.string(),
        author: z.string().optional(),
        publishDate: z
            .string()
            .or(z.date())
            .transform((val) => {
                if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
                    return new Date(val + "T00:00:00");
                }
                return new Date(val);
            }),
        draft: z.boolean().default(false),
        theme: z
            .enum([
                "black",
                "white",
                "league",
                "beige",
                "sky",
                "night",
                "serif",
                "dracula",
                "simple",
                "solarized",
                "blood",
                "moon",
            ])
            .default("black"),
    }),
});

const albumsCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            cover: image(),
        }),
});

export const collections = {
    posts: postsCollection,
    home: homeCollection,
    socials: socialsCollection,
    slides: slidesCollection,
    albums: albumsCollection,
    gentree: gentreeCollection,
};

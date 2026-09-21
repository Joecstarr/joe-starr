import rss from "@astrojs/rss";
import siteConfig from "~/site.config";
import type { AstroGlobal } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

// https://docs.astro.build/en/recipes/rss/
export async function GET(_context: AstroGlobal) {
    if (!siteConfig.site) {
        console.warn("Site URL is required for RSS feed generation. Skipping RSS feed generation.");
        return;
    }
    const posts = await getCollection("kitw", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
    return rss({
        stylesheet: "/rss.xsl",
        title: siteConfig.title,
        description: "Collection of knots and tangles found in the wild.",
        site: siteConfig.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.published,
            description: post.data.description,
            author: post.data.author || siteConfig.author,
            link: `/posts/${post.id}`,
            content: sanitizeHtml(parser.render(post.body || ""), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            }),
        })),
        trailingSlash: false,
    });
}

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: 'Yago Molano Portfolio',
    description: 'Yago Molano - GNC Engineer Portfolio',
    site: context.site,
    items: blog.map((post) => {
      const link = `/work/${post.slug}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
        stylesheet: '/rss/pretty-feed-v3.xsl',
      };
    }),
  });
}
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const writingPosts = await getCollection('writing');
	const projectPosts = await getCollection('projects');

	const allPosts = [...writingPosts, ...projectPosts];
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.slug}/`,
		})),
	});
}

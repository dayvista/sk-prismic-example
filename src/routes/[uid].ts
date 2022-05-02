import prismicClient from '../lib/prismic'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ params }) => {
	const post = (await prismicClient()
		.getByUID('blog', params.uid)
		// eslint-disable-next-line
		.catch((err) => console.log(err))) as Record<string, any>

	if (!post) {
		return { status: 404 }
	}

	return { status: 200, body: { post } }
}

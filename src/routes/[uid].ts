import prismicClient from '../lib/prismic'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ params, request }) => {
	// Pass request to createClient()
	const post = (await prismicClient(request)
		.getByUID('post', params.uid)
		// eslint-disable-next-line
		.catch((err) => console.log(err))) as Record<string, any>

	if (!post) {
		return { status: 404 }
	}

	return { status: 200, body: { post } }
}

import prismicClient from '../../lib/prismic'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ params, request }) => {
	try {
		const post = (await prismicClient(request)
			.getByUID('blog', params.uid)
			.catch((err) => console.log(err))) as Record<string, any>

		if (!post) {
			return { status: 404 }
		}

		return { status: 200, body: { post } }
	} catch (e) {
		console.log(e)

		return { status: 500 }
	}
}

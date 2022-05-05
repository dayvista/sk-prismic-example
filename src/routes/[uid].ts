import prismicClient from '../lib/prismic'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ params, request }) => {
	// Retrieve prismic preview cookie from request object
	const prismicCookie = JSON.parse(
		request.headers
			.get('cookie')
			?.split(';')
			.map(function (c) {
				return c.trim().split('=').map(decodeURIComponent)
			})
			.find((e) => e[0] === 'io.prismic.preview')
			?.slice(1)
			.join('=') || '{}'
	)

	// Pass cookie to createClient()
	const post = (await prismicClient(prismicCookie)
		.getByUID('post', params.uid)
		// eslint-disable-next-line
		.catch((err) => console.log(err))) as Record<string, any>

	if (!post) {
		return { status: 404 }
	}

	return { status: 200, body: { post } }
}

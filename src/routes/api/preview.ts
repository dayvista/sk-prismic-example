import type { RequestHandler } from '@sveltejs/kit'
import prismicClient from '../../lib/prismic'

export const get: RequestHandler = async ({ url }) => {
	try {
		const previewToken = url.searchParams.get('token')
		const documentID = url.searchParams.get('documentId')

		const redirect = await prismicClient().resolvePreviewURL({
			defaultURL: '/',
			linkResolver: (doc) => `/posts/${doc?.uid}`,
			previewToken,
			documentID
		})

		return {
			status: 303,
			headers: { location: redirect }
		}
	} catch (e) {
		console.log(e)

		return { status: 500 }
	}
}

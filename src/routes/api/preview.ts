import type { RequestHandler } from '@sveltejs/kit'
import prismicClient from '../../lib/prismic'

export const get: RequestHandler = async ({ url }) => {
	const previewToken = url.searchParams.get('token')
	const documentID = url.searchParams.get('documentId')

	const redirect = await prismicClient().resolvePreviewURL({
		defaultURL: '/',
		linkResolver: (doc) => `/${doc?.uid}`,
		previewToken,
		documentID
	})

	return {
		status: 303,
		headers: { location: redirect }
	}
}

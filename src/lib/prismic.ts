import * as prismic from '@prismicio/client'
import * as cookie from 'cookie'

export const repositoryName = 'sam-onboarding-blog-5'
const endpoint = prismic.getRepositoryEndpoint(repositoryName)
const client = prismic.createClient(endpoint)

const prismicClient = (request) => {
	if (request) {
		const cookies = cookie.parse(request.headers.get('cookie'))
		const previewRef = cookies[prismic.cookie.preview]
		if (previewRef) {
			client.queryContentFromRef(previewRef)
		}
	}

	// Pass preview ref to preview cookie
	return client
}

export default prismicClient

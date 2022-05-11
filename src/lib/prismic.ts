import { getRepositoryEndpoint, createClient, cookie as prismicCookie } from '@prismicio/client'
import cookie from 'cookie'

export const repositoryName = 'monogram'
const endpoint = getRepositoryEndpoint(repositoryName)

const prismicClient = (request?: Request) => {
	const client = createClient(endpoint)

	if (request) {
		const cookies = cookie.parse(request.headers.get('cookie'))
		const previewRef = cookies[prismicCookie.preview]

		if (previewRef) {
			client.queryContentFromRef(previewRef)
		}
	}

	return client
}

export default prismicClient

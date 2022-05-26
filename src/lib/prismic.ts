import { getRepositoryEndpoint, createClient } from '@prismicio/client'

export const repositoryName = 'monogram'
const endpoint = getRepositoryEndpoint(repositoryName)
const client = createClient(endpoint)

const prismicClient = (request?: Request) => {
	if (request) {
		client.enableAutoPreviewsFromReq(request)
	}

	return client
}

export default prismicClient

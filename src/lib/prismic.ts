import * as prismic from '@prismicio/client'

export const repositoryName = 'sam-onboarding-blog-5'
const endpoint = prismic.getRepositoryEndpoint(repositoryName)
const client = prismic.createClient(endpoint)

const prismicClient = (request) => {
	if (request) {
		client.enableAutoPreviewsFromReq(request)
	}

	return client
}

export default prismicClient

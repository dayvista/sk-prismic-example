import { getRepositoryEndpoint, createClient } from '@prismicio/client'

export const repositoryName = 'sam-onboarding-blog-5'
const endpoint = getRepositoryEndpoint(repositoryName)

const prismicClient = (prismicCookie) => {
	// Access preview ref from preview cookie
	const ref = prismicCookie?.[`${repositoryName}.prismic.io`]?.preview

	// Pass preview ref to preview cookie
	return createClient(endpoint, { ref })
}

export default prismicClient

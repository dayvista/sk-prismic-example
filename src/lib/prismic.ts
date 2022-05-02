import { getRepositoryEndpoint, createClient } from '@prismicio/client'

const endpoint = getRepositoryEndpoint('monogram')
const prismicClient = () => createClient(endpoint)

export default prismicClient

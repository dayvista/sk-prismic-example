<script>
	import { repositoryName } from '$lib/prismic'
</script>

<svelte:head>
	<script
		async
		defer
		src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}></script>
</svelte:head>

<slot />

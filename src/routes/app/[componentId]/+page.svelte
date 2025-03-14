<script lang="ts">
	import { page } from '$app/state';
	import routes from '$lib/routes';

	let component = $derived(
		routes.find((route) => route.path === '/' + page.params.componentId)?.component
	);
</script>

{#if component}
	{@render component()}
{:else}
	Not found
{/if}

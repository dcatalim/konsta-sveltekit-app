<script lang="ts">
	import { config } from '$lib/config.svelte.js';
	import { App } from 'konsta/svelte';

	let { data, children } = $props();
</script>

<App safeAreas theme={config.current.theme} class={config.current.colorTheme}>
	{@render children()}
</App>

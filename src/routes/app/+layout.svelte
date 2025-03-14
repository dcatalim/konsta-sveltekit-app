<script lang="ts">
	import { config } from '$lib/config.svelte.js';
	import { App } from 'konsta/svelte';
	import { App as CapApp } from '@capacitor/app';
	import { page } from '$app/state';

	let { data, children } = $props();

	CapApp.addListener('backButton', (data) => {
		console.log('Back Button Pressed:', data);
		if (page.route.id === '/app') {
			CapApp.exitApp();
		} else {
			window.history.back();
		}
	});
	
</script>

<App safeAreas theme={config.current.theme} class={config.current.colorTheme}>
	{@render children()}
</App>

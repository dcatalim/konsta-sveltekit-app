<script lang="ts">
	import { config } from '$lib/config.svelte.js';
	import { App } from 'konsta/svelte';
	import { App as CapApp } from '@capacitor/app';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	let { data, children } = $props();

	CapApp.addListener('backButton', (data) => {
		console.log('Back Button Pressed:', data);
		if (page.route.id === '/app') {
			CapApp.exitApp();
		} else {
			window.history.back();
		}
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<App safeAreas theme={config.current.theme} class={config.current.colorTheme}>
	{@render children()}
</App>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
	
</style>

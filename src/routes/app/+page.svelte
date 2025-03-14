<script lang="ts">
	import DemoIcon from '$lib/components/DemoIcon.svelte';
	import { config, setColorTheme, setTheme } from '$lib/config.svelte';
	import routes from '$lib/routes';
	import {
		Page,
		Navbar,
		BlockTitle,
		List,
		ListItem,
		Radio,
		Toggle,
		Link,
		Popover
	} from 'konsta/svelte';
	import { toggleMode, mode } from 'mode-watcher';

	let colorPickerOpened = $state(false);
</script>

<Page>
	<Navbar title="Konsta UI" large transparent centerTitle />

	<BlockTitle>Theme</BlockTitle>
	<List strong inset>
		<ListItem label title="iOS Theme">
			<Radio
				slot="media"
				onChange={() => setTheme('ios')}
				component="div"
				checked={config.current.theme === 'ios'}
			/>
		</ListItem>
		<ListItem label title="Material Theme">
			<Radio
				slot="media"
				onChange={() => setTheme('material')}
				component="div"
				checked={config.current.theme === 'material'}
			/>
		</ListItem>
	</List>
	<List strong inset>
		<ListItem title="Dark Mode" label>
			<Toggle
				slot="after"
				component="div"
				onChange={() => toggleMode()}
				checked={$mode === 'dark'}
			/>
		</ListItem>

		<ListItem title="Color Theme" link onClick={() => (colorPickerOpened = true)}>
			<div slot="after" class="w-6 h-6 rounded-full bg-primary home-color-picker"></div>
		</ListItem>
	</List>
	<Popover
		opened={colorPickerOpened}
		onBackdropClick={() => (colorPickerOpened = false)}
		size="w-36"
		target=".home-color-picker"
	>
		<div class="grid grid-cols-3 py-2">
			<Link touchRipple class="overflow-hidden h-12" onClick={() => setColorTheme('')}>
				<span class="bg-brand-primary w-6 h-6 rounded-full"></span>
			</Link>
			<Link
				touchRipple
				class="overflow-hidden h-12"
				onClick={() => setColorTheme('k-color-brand-red')}
			>
				<span class="bg-brand-red w-6 h-6 rounded-full "></span>
			</Link>
			<Link
				touchRipple
				class="overflow-hidden h-12"
				onClick={() => setColorTheme('k-color-brand-green')}
			>
				<span class="bg-brand-green w-6 h-6 rounded-full"></span>
			</Link>
			<Link
				touchRipple
				class="overflow-hidden h-12"
				onClick={() => setColorTheme('k-color-brand-yellow')}
			>
				<span class="bg-brand-yellow w-6 h-6 rounded-full"></span>
			</Link>
			<Link
				touchRipple
				class="overflow-hidden h-12"
				onClick={() => setColorTheme('k-color-brand-purple')}
			>
				<span class="bg-brand-purple w-6 h-6 rounded-full"></span>
			</Link>
		</div>
	</Popover>

	<BlockTitle>Components</BlockTitle>
	<List strong inset>
		{#each routes as route}
			<ListItem link href={`/app${route.path}`} title={route.title}>
				<DemoIcon slot="media" />
			</ListItem>
		{/each}
	</List>
</Page>

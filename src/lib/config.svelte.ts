import { LocalStorage } from './storage.svelte';

export const setTheme = (newTheme: 'material' | 'ios') => (config.current.theme = newTheme);

export const setColorTheme = (colorTheme: string) => (config.current.colorTheme = colorTheme);

export const config = new LocalStorage('config', {
	theme: 'ios',
	colorTheme: ''
});

// export const config = $state({
// 	theme: 'ios',
// 	colorTheme: ''
// });

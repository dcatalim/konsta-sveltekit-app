const konstaConfig = require('konsta/config');

// wrap config with konstaConfig config
module.exports = konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector', // or 'class' 'media'
	konsta: {
		colors: {
			primary: '#007aff',
			'brand-primary': '#007aff',
			'brand-red': '#ff3b30',
			'brand-green': '#4cd964',
			'brand-yellow': '#ffcc00',
			'brand-purple': '#9c27b0',
			'brand-blue': '#2196f3'
		}
	},
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
});

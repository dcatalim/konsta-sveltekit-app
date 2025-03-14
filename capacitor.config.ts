import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.konsta-sveltekit.app',
  appName: 'konsta-sveltekit-app',
  webDir: 'build',
  // uncomment this to enable hot reload
  // server: {
	// 	url: 'http://192.168.0.8:5173',
	// 	cleartext: true
	// }
};

export default config;

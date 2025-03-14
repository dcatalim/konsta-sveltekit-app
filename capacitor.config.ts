import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.konsta-sveltekit.app',
  appName: 'konsta-sveltekit-app',
  webDir: 'build',
  // uncomment this to enable hot reload
  // server: {
	// 	url: 'http://192.168.0.8:5173',
	// 	cleartext: true
	// },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true, // There is an Android bug that prevents the keyboard from resizing the WebView when the app is in full screen. This setting, if set to true, add a workaround that resizes the WebView even when the app is in full screen.
    },
  },
};

export default config;

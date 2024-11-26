import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapterCloudflare from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterCloudflare()
	},
};

export default config;

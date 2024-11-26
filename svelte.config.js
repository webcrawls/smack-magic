import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapterAuto from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterAuto
	},
};

export default config;

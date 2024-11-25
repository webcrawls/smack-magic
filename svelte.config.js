// adapted from https://www.ryanfiller.com/blog/tips/conditional-sveltekit-adapters

import adapterStatic from '@sveltejs/adapter-static'
import adapterCloudflare from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: process.env.CF_PAGES === '1'
			? adapterCloudflare()
			: adapterStatic({fallback: 'index.html'}),
	},
};

export default config;

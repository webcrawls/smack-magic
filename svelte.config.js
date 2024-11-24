// adapted from https://www.ryanfiller.com/blog/tips/conditional-sveltekit-adapters

import dotenv from 'dotenv'
dotenv.config()

import adapterStatc from '@sveltejs/adapter-static'
import adapterCloudflare from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: process.env.ADAPTER === 'static'
			? adapterStatic({ fallback: 'index.html' })
			: adapterCloudflare(),
	},
};

export default config;

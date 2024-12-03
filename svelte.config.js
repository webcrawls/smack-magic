import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import adapterStatic from '@sveltejs/adapter-static'
import adapterNode from '@sveltejs/adapter-node'
import adapterCloudflare from '@sveltejs/adapter-cloudflare'

const environment = process.env.VITE_MODE ?? "static"

let adapter = undefined
if (environment === "preview") adapter = adapterNode()
if (environment === "cloudflare") adapter = adapterCloudflare()
if (environment === "static") adapter = adapterStatic()

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter },
};

export default config;

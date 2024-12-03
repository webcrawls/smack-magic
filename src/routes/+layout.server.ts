import type { LayoutServerLoad } from "./$types";

const hash = (async () => {
    if (process.env.VITE_MODE === "cloudflare") {
        return process.env.CF_PAGES_COMMIT_SHA
    } else {
        
    }
})()

export const load: LayoutServerLoad = async () => {
    return {
        build: await hash
    }
}
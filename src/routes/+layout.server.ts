import type { LayoutServerLoad } from "./$types";

const hash = (async () => {
    if (process.env.VITE_MODE === "cloudflare") {
        return process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7)
    } else {
        const { execSync } = await import("node:child_process")
        const result = execSync("git show -s --format=%h")
        console.log(result.toString())
        return result.toString()
    }
})()

export const load: LayoutServerLoad = async () => {
    return {
        build: await hash
    }
}
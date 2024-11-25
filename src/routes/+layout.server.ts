import type { LayoutServerLoad } from "./$types";
import dotenv from "dotenv"
dotenv.config()

const gitHash = await (async () => {
    if (process.env.CF_PAGES === '1') {
        return process.env.CF_PAGES_COMMIT_SHA
    } else 
    {
        return (await import("child_process"))
        .execSync('git rev-parse HEAD')
            .toString().trim().slice(0, 7)
    }
})()

export const load: LayoutServerLoad = async () => {
    return {
        build: gitHash
    }
}
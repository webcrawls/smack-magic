import type { LayoutServerLoad } from "./$types";

const gitHash = await (async () => {
    return "a73bc3d"    
})()

export const load: LayoutServerLoad = async () => {
    return {
        build: gitHash
    }
}
import type { LayoutServerLoad } from "./$types";

const gitHash = "a73bc3d"

export const load: LayoutServerLoad = async () => {
    return {
        build: gitHash
    }
}
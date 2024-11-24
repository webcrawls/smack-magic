import type { LayoutServerLoad } from "./$types";
import { execSync } from 'child_process';

export const load: LayoutServerLoad = async () => {
    return {
            build: execSync('git rev-parse HEAD')
            .toString().trim().slice(0, 7)
    }
}
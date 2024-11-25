import type { ServerLoad } from "@sveltejs/kit";
import testimonials from "$lib/assets/copy/testimonials";

export const load = (): ServerLoad => {
    return {
        testimonials: [...testimonials]
    }
}
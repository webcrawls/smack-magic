import type { Snippet } from "svelte"

const makeOverlayStore = () => {
    let children: Snippet[] = $state([])

    return {
        get children() { return children },
        addChild: (snippet: Snippet) => {
            children = [...children, snippet]
        }
    }
}

export const overlay = makeOverlayStore()
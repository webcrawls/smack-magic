import type { Component, Snippet } from "svelte"
import type Popup from "./Popup.svelte"

export interface PopupData {
    render: Component,
    focus: boolean
}

const makeOverlayStore = () => {
    let children: PopupData[] = $state([])

    return {
        get popups(): PopupData[] { return children },
        add: (popup: PopupData) => {
            children = [...children, popup]
        },
        remove: (popup: PopupData) => {
            children = children.filter((child) => child !== popup)
        }
    }
}

export const popups = makeOverlayStore()
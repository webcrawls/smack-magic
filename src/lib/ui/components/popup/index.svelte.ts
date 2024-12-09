import PrivacyPolicy from "$lib/ui/components/window/types/PrivacyPolicy.svelte";
import TermsOfService from "$lib/ui/components/window/types/TermsOfService.svelte";
import type { Component, Snippet } from "svelte"

export interface PopupData {
    render: Component,
    focus: boolean | {
        darken: boolean,
        captureScroll: boolean,
        closeOnClickOut: boolean
    },
    position?: { x: number, y: number } | "center" | "followmouse",
}

export interface ActivePopup {
    data: PopupData;
    id: string;
    visible: boolean;
}

const newId = (base, ids) => {
    let id = base;
    while (ids.includes(id)) {
        id += Math.floor(Math.random());
    }
    return id;
};

const makeOverlayStore = () => {
    let children: { [id: string]: ActivePopup } = $state({})

    const isComponentTypeShown = (type: Component): boolean => {
        for (const [id, popup] of Object.entries(children)) {
            if (popup.data === type) {
                console.log({type})
                return true
            }
        }

        return false
    }

    const add = (data: PopupData) => {
        const id = newId("popup", Object.keys(children))
        children = {
            ...children,
            [id]: { data, id, visible: true, open: false }
        }
        return id
    }

    const remove = (popup: ActivePopup) => {
        children = Object.fromEntries(Object.entries(popup).filter(([id, child]) => id === popup.id))
    }

    return {
        get popups(): ActivePopup[] { return Object.values(children) },
        add, remove, isComponentTypeShown
    }
}

export const popups = makeOverlayStore()

const tos: PopupData = {
    render: TermsOfService,
    focus: true,
    position: "center"}

const privacyPolicy: PopupData = {
    render: PrivacyPolicy,
    position: "center",
    focus: true
}

export const types = {
    tos, privacyPolicy
}
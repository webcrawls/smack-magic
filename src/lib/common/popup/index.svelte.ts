import type { Component, Snippet } from "svelte"
import { newId } from "$lib/utils/consts";
import TermsOfService from "./types/TermsOfService.svelte";
import PrivacyPolicy from "./types/PrivacyPolicy.svelte";

export interface PopupData {
    render: Component,
    focus: boolean | {
        darken: boolean,
        captureScroll: boolean,
        closeOnClickOut: boolean
    },
    position?: { x: number, y: number } | "center" | "followmouse",
    transition?: {
        in?: {
            type: string,
            [key: string]: any
        
        }
        out?: {
            type: string,
            [key: string]: any
        }
    }
}

export interface ActivePopup {
    data: PopupData;
    id: string;
    visible: boolean;
    open: boolean;
}

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

    const opened = (popup: ActivePopup) => {
        children = Object.fromEntries(Object.entries(popup).map(([id, child]) => {
            if (child.id === popup.id) {
                return {...child, open: true}
            } else { return child }
        }))
    }

    return {
        get popups(): ActivePopup[] { return Object.values(children) },
        add, remove, opened,
        isComponentTypeShown
    }
}

export const popups = makeOverlayStore()

const tos: PopupData = {
    render: TermsOfService,
    focus: true,
    position: "center",
    transition: {
        in: {
            type: "fader",
            direction: "left"
        },
        out: {
            type: "fader",
            direction: "right"
        }
    }
}

const privacyPolicy: PopupData = {
    render: PrivacyPolicy,
    position: "center",
    focus: true,
}

export const types = {
    tos, privacyPolicy
}
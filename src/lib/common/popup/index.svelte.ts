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
}

const makeOverlayStore = () => {
    let children: { [id: string]: ActivePopup } = $state({})

    const add = (data: PopupData) => {
        const id = newId("popup", Object.keys(children))
        children = {
            ...children,
            [id]: { data, id, visible: true }
        }
    }

    const remove = (popup: ActivePopup) => {
        children = Object.fromEntries(Object.entries(popup).filter(([id, child]) => id === popup.id))
    }

    return {
        get popups(): ActivePopup[] { return Object.values(children) },
        add, remove
    }
}

export const popups = makeOverlayStore()

const tos: PopupData = {
    render: TermsOfService,
    focus: true,
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
    focus: true,
}

export const types = {
    tos, privacyPolicy
}
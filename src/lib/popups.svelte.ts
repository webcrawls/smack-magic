import type { Component } from "svelte"

interface Popup {
    element?: any
}

export const popups = (() => {
    let _popups: Popup[] = $state([])

    const remove = (element: Component) => {
        console.log({ popups, element })
        _popups = _popups.filter(popup => popup.element !== element)
    }
    
    const add = (element: Component) => {
        const popup = {
            element,
            destroy: remove.bind(this, element),
            x: 100, y: 100
        }
    
        _popups = [..._popups, popup]
    }
    
    return {
        get popups() { return _popups },
        add
    }
})()
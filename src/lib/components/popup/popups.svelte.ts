import SalePopup from "./sale/SalePopup.svelte"

export const current = (() => {
    let popups = $state([])

    const add = (element) => { popups = [...popups, { element, x: 100, y: 100 }] }

    add(SalePopup)

    return {
        get popups() {
            return popups
        },
        add
    }
})()
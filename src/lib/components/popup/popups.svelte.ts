import SalePopup from "./sale/SalePopup.svelte"

export const current = (() => {
    let popups = $state([])

    const remove = (element) => {
        console.log({popups, element})
        popups = popups.filter(popup => popup.element !== element)
    }

    const add = (element) => {
        const popup = {
            element,
            destroy: remove.bind(this, element),
            x: 100, y: 100
        }

        popups = [ ...popups, popup ]
    }

    setTimeout(() => add(SalePopup), 1000)

    return {
        get popups() {
            return popups
        },
        add
    }
})()
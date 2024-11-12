let _popups = $state([])

const remove = (element) => {
    console.log({ popups, element })
    _popups = _popups.filter(popup => popup.element !== element)
}

const add = (element) => {
    const popup = {
        element,
        destroy: remove.bind(this, element),
        x: 100, y: 100
    }

    _popups = [..._popups, popup]
}

export const popups = {
    get() {
        return popups
    }
}
let popups = $state([])

export function getPopups() {
    return {
        get exists() {
            return popups.length !== 0
        },
        get all() {
            return [...popups]
        },
        add: (comp) => {
            popups = [...popups, { component: comp, visible: false }]
        },
        setVisible: (popup) => {
            popups = popups.map((p) => p === popup ? {...popup, visible: true} : p)
        },
        pop: (comp?) => {
            if (comp) popups = popups.filter(v => v !== comp)
            if (!comp) popups = popups.filter(v => v === comp)
        }
    }
}
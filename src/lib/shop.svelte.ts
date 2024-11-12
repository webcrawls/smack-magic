let cartItems = $state([])

export const subtotal = () => {
    let val = 0
    for (const item of items) {
        val += item.price
    }
    return val.toFixed(2)
}

export const add = (item) => items = [...items. item]
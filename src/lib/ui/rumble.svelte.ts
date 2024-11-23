export const rumbler = () => {
    const rumbleTime = 100

    let rumbleTick = 0
    let range = 20
    let frame = 0

    let offsetX: number = $state(0)
    let offsetY: number = $state(0)

    const tick = () => {
        if (rumbleTick >= rumbleTime) {
            cancelAnimationFrame(frame)
            return
        }

        rumbleTick += 1

        const currentRange = range * (1 * (rumbleTime - rumbleTick) / rumbleTime);
        offsetX = Math.random() * currentRange - currentRange / 2
        offsetY = Math.random() * currentRange - currentRange / 2

        frame = requestAnimationFrame(tick)
    }

    const rumble = () => {
        rumbleTick = 0
        tick()
    }

    return {
        rumble,
        get x() { return offsetX },
        get y() { return offsetY }
    }
}
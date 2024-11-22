import { browser } from "$app/environment"
import { type Writable, writable, type Updater } from "svelte/store"

export const localStore = <T = any>(key: string, value: T,
    deserializer: (value: string) => T = JSON.parse,
    serializer: (value: T) => string = JSON.stringify) => {

    const loadValue = (): string | null => browser ? localStorage.getItem(key) : null
    const saveValue = (value: string) => browser && localStorage.setItem(key, value)

    let currentValue = $state(value)

    if (browser) {
        const savedValue = loadValue()
        if (savedValue) currentValue = deserializer(savedValue)
    }

    return {
        get value() { return currentValue },
        set value(object) { 
            currentValue = object
            saveValue(serializer(object))
         }
    }

    // const { subscribe, set: initialSet, update: initialUpdate } = writable<T>()


    // const initialValue = loadValue()
    // initialSet(initialValue ? deserializer(initialValue) : value)

    // const set = (newValue: T) => {
    //     value = newValue
    //     initialSet(newValue)
    //     if (newValue) saveValue(serializer(newValue))
    // }

    // const update = (fn: Updater<T>): void => {
    //     set(fn(value))
    // }

    // return { subscribe, set, update }
}
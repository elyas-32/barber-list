export const API = "https://lookee.nwhco.ir/aapi";
export const debounce = (func: Function, delay: number) => {
    let timeout: null | NodeJS.Timeout = null
    return (...args: any) => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

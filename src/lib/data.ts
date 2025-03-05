export const API = "https://lookee.nwhco.ir/aapi";
export const controllCall = (func: Function) => {
    let controller: null | AbortController = null
    return async (...args: any) => {
        // @ts-ignore typescript thinks the controller can not be something instead of null
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        try {
            return await func(controller, ...args)
        } catch (error) {
            console.log("fetch barbers error: ", error);
        } finally {
            controller = null
        }

    }
}
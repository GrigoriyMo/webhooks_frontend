import { defu } from 'defu'

export function postToBackend(url = '', data, options = {}) {
    
    const defaults = {
        baseURL: "http://localhost:3001",
        // cache request
        key: url,
        method: 'POST',

        body: data,

        // set user token if connected
        //headers: { Authorization: `Bearer ${config.apiSecret}` },


        onResponse(_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },

        onResponseError(_ctx) {
            // throw new myBusinessError()
        }
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)

}


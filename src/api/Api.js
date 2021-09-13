import axios from "axios";

let BASE_URL = 'http://127.0.0.1:8000/api/'

//common for all api
export const _Api = (methodType, endPoint, request = '', query = '') => {
    try {
        return new Promise((resolve, reject) => {
            let Cmp_Url = `${BASE_URL}${endPoint}`
            axios({
                method: methodType,
                url: `${Cmp_Url}${query}`,
                data: request,
                // headers: {
                //     "Authorization": authKey,
                //     'Content-Type': 'application/json',
                //     accessToken: localStorage.getItem("accessToken")
                // }
            }).then(resp => {
                console.log("response==>> ", resp)
                const { data } = resp
                resolve(data)

            }).catch(err => {
                reject(err)
            })
        })

    }
    catch (err) {
        console.log("err==>> ", err)


    }
}



export const END_POINT = {
    "LOGIN": { method: 'POST', endPoint: 'login/' },
    "REGISTER": { method: 'POST', endPoint: 'register/' },
    "GET_PRODUCTS_LIST": { method: 'GET', endPoint: 'products/' },
    "GET_PRODUCTS_ITEM": { method: 'GET', endPoint: 'product/' },
    "GET_HOME_SLIDER_IMAGES": { method: 'GET', endPoint: 'slider/' }
}

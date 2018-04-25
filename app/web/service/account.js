
import { get, post } from './request'



export function loginApi(params) {
    return post('/login', params)
}

export function registerApi(params) {

    return post('/register', params )
}

export function userInfoApi() {
    return get('/getUserInfo')
}

export function updateInfoApi(params) {
    return post('/updateUserInfo', params)
}



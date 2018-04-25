import axios from 'axios'
import cookies from 'js-cookie';
import { server } from 'config/config.server'

var instance = axios.create({
    baseURL: server,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': cookies.get('_token_')
    },
    // withCredentials: true // 允许携带cookie
});

export function get(url, data) {
    return instance.request({
        url: url,
        method: 'get',
        params: data,
    })

}

export function post(url, data) {
    return instance.request({
        url: url,
        method: 'post',
        data: JSON.stringify(data),
    })
}


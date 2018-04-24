import axios from 'axios'
import { APIServer } from 'utils'

import $ from 'jquery';

import { get, post } from './request'

console.log(APIServer);


export function loginApi(params) {
    return axios.get('/login', params)
}

export function registerApi(params) {
    // return axios.get('/register', {
    //     params
    // })

    return axios.post('/register', params )
}

export function userInfoApi(params) {
    return axios.get('/getUserInfo', {
        params,
        
    })
}

export function test(params) {
    // return get('http://192.168.0.104:81/course/searchAllCourse?course_name=3', params)
    return $.ajax({
        url: 'http://192.168.0.104:81/course/searchAllCourse?course_name=3',
        // data: params,
        headers: {
            'Content-Type': 'application/json',
            // 'token': 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ4MDYwOSwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.HssNZw4jx4nK6Y2zNQaxz1_Vx9NtMcEsfbFgyj9tU1UBiJMIiUnw8R0gvUnTZ_m4Hvu4xMgNjCgti7n2GJ5BLw',
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ5NDQwNCwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.MtjAYF16AImAU-bmeDmzAoT-4PtqKpGyQjB5s083XAyhD9Kbezmj_zLLRGoqlEdMwr2Bp6G8G_LmGywVQDWrBw')
        }
    })
}


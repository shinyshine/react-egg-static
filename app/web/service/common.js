import axios from 'axios';

const baseURL = 'http://192.168.0.104:81';

// const instance = axios.create({
//     headers: {
//         'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ4MDYwOSwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.HssNZw4jx4nK6Y2zNQaxz1_Vx9NtMcEsfbFgyj9tU1UBiJMIiUnw8R0gvUnTZ_m4Hvu4xMgNjCgti7n2GJ5BLw',
//         'Content-Type': 'application/json'
//     }

// });

var instance = axios.create({
    baseURL: 'http://192.168.0.104:81',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ4MDYwOSwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.HssNZw4jx4nK6Y2zNQaxz1_Vx9NtMcEsfbFgyj9tU1UBiJMIiUnw8R0gvUnTZ_m4Hvu4xMgNjCgti7n2GJ5BLw'
    },
    // withCredentials: true
});

// axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ4MDYwOSwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.HssNZw4jx4nK6Y2zNQaxz1_Vx9NtMcEsfbFgyj9tU1UBiJMIiUnw8R0gvUnTZ_m4Hvu4xMgNjCgti7n2GJ5BLw'



// 请求统一处理 
// instance.interceptors.request.use(async config => {
//     if (config.url && config.url.charAt(0) === '/') {
//         config.url = `${baseURL}${config.url}`
//     }
//     return config
// }, error => Promise.reject(error))

// // 对返回的内容做统一处理 
// instance.interceptors.response.use(response => {
//     if (response.status === 200) {
//         return response
//     }
//     return Promise.reject(response)
// }, error => {
//     if (error) {
//         console.log(JSON.stringify(error))
//     } else {
//         console.log('出了点问题，暂时加载不出来，请稍后再来吧')
//     }
//     return Promise.reject(error)
// })
export default instance
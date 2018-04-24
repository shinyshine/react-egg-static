import axios from 'axios'
import cookies from 'js-cookie';

console.log(cookies.get('_token_'));

var instance = axios.create({
    baseURL: 'http://192.168.0.104:81',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJjb3Vyc2VfaWQiOjAsInN1Ym1pdF90aWQiOjAsImNsYXNzX2lkIjowLCJncmFkZSI6MCwidGFza19pZCI6MCwiaWQiOiIyMDE0MTAwMjQyNiIsInR5cGUiOjIsImV4cCI6MTUyNDQ4MDYwOSwibm90aWNlX2lkIjowLCJzdGF0dXMiOjAsInVzZXJuYW1lIjoidERpYW5nIn0.HssNZw4jx4nK6Y2zNQaxz1_Vx9NtMcEsfbFgyj9tU1UBiJMIiUnw8R0gvUnTZ_m4Hvu4xMgNjCgti7n2GJ5BLw',
    },
    // withCredentials: true // 允许携带cookie
});

// request拦截器
// instance.interceptors.request.use(
//     config => {
//       // 发送请求之前，要做的业务
//       return config
//     },
//     error => {
//       // 错误处理代码
      
//       return Promise.reject(error)
//     }
//   )


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


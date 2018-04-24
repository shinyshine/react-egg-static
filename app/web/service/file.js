import axios from 'axios'

export function deleteFile(params) {
    return axios.get('/api/getStuListByid', {
        params
    })
}

export function uploadApi(params) {
}

export function submitWorkApi(params) {
    
}

import axios from 'axios'

export function modifyCourse(params) {
    return axios.get('/course/updateCourse', {
        params
    })
}

export function fileListApi(params) {
    return axios.get('/file/getFileByCourseId', {
        params
    })
}

export function courseListApi(params) {
    return axios.get('/course/updateCourse', {
        params
    })
}

export function getCoursesByCurrentId(params) {
    return axios.get('/course/getCoursesByCurrentId', {
        params
    })
}




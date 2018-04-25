import axios from 'axios'
import { get, post } from './request';

export function modifyCourse(params) {
    return post('/course/updateCourse', params)
}

export function fileListApi(params) {
    return get('/file/getFileByCourseId', params)
}
export function getCoursesByCurrentId(params) {
    return axios.get('/course/getCoursesByCurrentId', {
        params
    })
}

export function searchCourseApi(params) {
    return get('/course/searchAllCourse', params)
}

export function createCourseApi(params) {
    return post('/course/createCourse', params)
}




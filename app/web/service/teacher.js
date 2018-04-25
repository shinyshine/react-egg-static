import { get, post } from './request';


export function getCourseApi(params) {
    return get('/course/getCoursesByCurrentId', params)
}

export function getAllClassApi(params) {
    return get('/aClass/getAllClass', params)
}

export function addClassApi(params) {
    return post('/aClass/createClass', params);
}

export function deleteCourse(params) {
    return get('/course/deleteCourse', params)
}

export function deleteClassApi(params) {
    return get('/aClass/deleteClass', params)
}
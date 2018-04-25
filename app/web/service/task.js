import { get, post } from './request';

export function getTasksApi(params) {
    return get('/task/getTasksByClassId', params);
}

export function getStuTaskApi(params) {
    return get('/task/getStuSubTasks', params);
}

export function getStuFinishedTaskApi(params) {
    return get('/task/stuNotSubTask', params)
}

export function submitTaskApi(params) {
    return post('/task/submitTask', params)
}

export function teaSetSubTaskApi(params) {
    return get('/task/teaGetSubTask', params)
}

export function teaGetNotSubTaskApi(params) {
    return get('task/teaGetNotSubTask', params)
}

export function setGradeApi(params) {
    return post('/task/setGrade', params)
}
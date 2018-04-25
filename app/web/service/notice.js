import { get, post } from './request'

export function createTaskApi(params) {
    return post('/task/createTask', params);
}

export function createNoticeApi(params) {
    return post('/notice/createNotice', params);
}

export function getNoticesApi(params) {
    return get('/notice/getNoticeByClassId', params);
}

export function getLatestNoticesApi(params) {
    return get('notice/getFiveNotice', params);
}
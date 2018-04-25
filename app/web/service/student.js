import { get, post } from './request';

export function joinCourseApi(params) {
    return post('/aClass/registerClass', params);
}
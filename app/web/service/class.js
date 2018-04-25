import { get } from './request';

export function getStudentsApi(params) {
    return get('/aClass/getStudentsInClass', params);
}

export function getStuClassApi() {
     return get('aClass/getClassByStuId')
}
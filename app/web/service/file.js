import { get } from './request'

export function deleteFileApi(params) {
    return get('file/deleteCourseFile',params)
}


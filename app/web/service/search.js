import axios from 'axios'

const url = 'http://mg.world.easyrentcars.com/np/user-center/account/api/getusersinfos'
export function joinCourseApi(params) {
    return axios.get(url, {
        params
    })
}

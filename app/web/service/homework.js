import axios from 'axios'

const url = 'http://mg.world.easyrentcars.com/np/user-center/account/api/getusersinfos'
export function fetchStuList(params) {
    return axios.get('/api/getStuListByid', {
        params
    })
}

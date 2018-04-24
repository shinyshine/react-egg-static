const Service = require('egg').Service;
const request = require('./request');
class homeworkService extends Service {
    async getStuListByid() {
        return await request('http://mg.world.easyrentcars.com/np/user-center/account/api/getusersinfos', { id: 123 });
    }
}

module.exports = homeworkService;
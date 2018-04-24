module.exports = app => {
    return class homeworkController extends app.Controller {
        async getStuListByid() {
            const { ctx, service } = this;

            const req = Object.assign(ctx.request.body );
            console.log('req in controller', req)

            const res = await service.homework.getStuListByid(req);

            ctx.body = res.data
            ctx.status = 201;


        }
    }
}
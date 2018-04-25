module.exports = app => {
    return class mobileController extends app.Controller {
        async notice() {
            const { ctx } = this;
            await ctx.renderClient('mobile/task.js');
        }
    }
}
module.exports = app => {
    return class modifyController extends app.Controller {
        async page() {
            const { ctx } = this;
            console.log('ctx.query', ctx.query);
            await ctx.renderClient('course/modify.js', { url: ctx.url });
        }
    };
};
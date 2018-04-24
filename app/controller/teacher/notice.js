module.exports = app => {
    return class teaCourseController extends app.Controller {
        async page() {
            const { ctx } = this;
            console.log('ctx.query', ctx.query);
            await ctx.renderClient('course/edit.js', { url: ctx.url });
        }
    };
};
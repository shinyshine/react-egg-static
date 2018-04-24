module.exports = app => {
    return class courseController extends app.Controller {
        async page() {
            const { ctx } = this;
            const id = ctx.query.id;
            console.log('ctx.query', ctx.query);
            await ctx.renderClient('stuCourse/stuCourse.js');
        }
    };
};
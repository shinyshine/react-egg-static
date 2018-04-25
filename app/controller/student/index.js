module.exports = app => {
    return class indexController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.render('student/student.js', {query: ctx.query});
        }
    };
};
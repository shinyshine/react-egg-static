module.exports = app => {
    return class indexController extends app.Controller {
        async page() {
            const { ctx } = this;
            const id = ctx.query.id;
            console.log('ctx.query', ctx.query);
            await ctx.render('student/student.js');
        }
    };
};
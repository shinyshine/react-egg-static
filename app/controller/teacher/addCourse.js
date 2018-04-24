module.exports = app => {
    return class addController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.render('addCourse/addCourse.js');
        }
    }
}
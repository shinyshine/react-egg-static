module.exports = app => {
    return class teaCourseController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.renderClient('course/course.js', { url: ctx.url });
        }

        async renderClassPage() {
            const { ctx } = this;
            console.log(ctx.query)

            
            await ctx.render('class/class.js', { url: ctx.url, query: ctx.query})
        }
    };
};
module.exports = app => {
    return class searchController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.render('searchResult/searchResult.js');
        }
    }
}
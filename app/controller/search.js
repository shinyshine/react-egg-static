module.exports = app => {
    return class searchController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.renderClient('searchResult/searchResult.js');
        }
    }
}
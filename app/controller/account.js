module.exports = app => {
    return class accountController extends app.Controller {
        async page() {
            const { ctx } = this;
            await ctx.render('account/account.js');
        }
        async info() {
            const { ctx } = this;
            await ctx.render('stuInfo/stuInfo.js');
        }
    }
}
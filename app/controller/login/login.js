module.exports = app => {
  return class loginController extends app.Controller {
    async page() {
      const { ctx } = this;
      await ctx.render('login/login.js');
    }
  };
};
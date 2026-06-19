const {LoginPage} = require("./LoginPage");
const { DashboardPage } = require("./DashboardPage");
const { CheckoutPage } = require("./CheckoutPage");
const {OrderReviewPage} = require("./OrderReviewPage");

class POManager {
    constructor(page, expect) 
    {
        this.page = page;
        this.expect = expect;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page, this.expect);
        this.orderReviewPage = new OrderReviewPage(this.page, this.expect);
    }

    getLoginPage()
    {
        return  this.loginPage;
    }
    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getCheckoutPage()
    {
        return this.checkoutPage;
    }
    getOrderReviewPage()
    {
        return this.orderReviewPage;
    }
}

module.exports = {POManager};
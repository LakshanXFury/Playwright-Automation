const {test, expect} = require("@playwright/test");
// const {LoginPage} = require('../pageobject/LoginPage');
// const { DashboardPage } = require("../pageobject/DashboardPage");
// const { CheckoutPage } = require("../pageobject/CheckoutPage");

const {POManager} = require('../pageobject/POManager');

// Import Test Data File
// Json -> String -> js Object
const dataSet = JSON.parse(JSON.stringify(require("../TestData/placeOrderTestData.json")));

for(const data of dataSet)
{

    test(`Client App POM - Testing for product: ${data.product_name}`, async ({page})=>
    {
        // Object Creation

        const pomanager = new POManager(page, expect);
        // const loginPage = new LoginPage(page);
        // const dashboardPage = new DashboardPage(page);
        // const checkoutPage = new CheckoutPage(page, expect);


        //// From Page Object it is being called.

        // await loginPage.goto_url();
        // await loginPage.validLogin(username, password);
        // await dashboardPage.searchProduct(product_name);
        // await dashboardPage.navigate_to_cart();
        // await checkoutPage.product_visible(product_name);
        // await checkoutPage.checkout();


        /// Call Page Object from POManager File
        const loginPage = await pomanager.getLoginPage();
        await loginPage.goto_url();
        await loginPage.validLogin(data.username, data.password);

        const dashboardPage = await pomanager.getDashboardPage();
        await dashboardPage.searchProduct(data.product_name);
        await dashboardPage.navigate_to_cart();
        

        const checkoutPage = await pomanager.getCheckoutPage();
        await checkoutPage.product_visible(data.product_name);
        await checkoutPage.checkout();

        const orderReviewPage = await pomanager.getOrderReviewPage();
        await orderReviewPage.ordered_page_assertion();
        await orderReviewPage.fetch_order_no();
        await orderReviewPage.select_order_from_orders_page();
        await orderReviewPage.final_assertion();
        

    });
}
class CheckoutPage {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    async product_visible(product_name) {
        const bool = await this.page.locator(`h3:has-text('${product_name}')`).isVisible();
        await this.expect(bool).toBeTruthy();
    }

    async checkout() {
        await this.page.getByText("Checkout").click();

        await this.page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 }); //One by one, delay of 150 millisecond
        const dropDowwn = this.page.locator(".ta-results.list-group.ng-star-inserted");
        await dropDowwn.waitFor();
        const options_count = await dropDowwn.locator("button").count();
        for (let i = 0; i < options_count; ++i) {
            const text = await dropDowwn.locator("button").nth(i).textContent();
            if (text == " India") {
                await dropDowwn.locator("button").nth(i).click();
                break;
            }

        }
        await this.page.locator("div.title:has-text('CVV Code ')").locator("+input").fill("868");
        await this.page.locator("div.title", { hasText: "Name on Card" }).locator("+input").fill("Fury");

        await this.page.locator("text=Place Order ").click();

    }
}

module.exports = {CheckoutPage}; //Making this class available everywhere
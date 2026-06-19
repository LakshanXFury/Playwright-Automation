class DashboardPage {
    constructor(page) 
    {
        this.page = page // Same like self inpython
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart_btn = page.locator('[routerlink="/dashboard/cart"]')


    }

    async searchProduct(product_name) {
        
        const titles = await this.productsText.allTextContents();
        console.log(titles);

        const count = await this.products.count();

        // For and If loop is used
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() == product_name) 
            {
                await this.products.nth(i).getByText("Add To Cart").click();
                break;
            }
        }
    }

    async navigate_to_cart()
    {
        await this.cart_btn.click();
        await this.page.locator("div li").first().waitFor(); 

    }
}

module.exports = {DashboardPage};  //Making this class available everywhere
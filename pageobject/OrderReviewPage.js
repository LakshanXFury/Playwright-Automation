class OrderReviewPage
{
    constructor(page, expect)
    {
        this.page = page;
        this.expect = expect;
        this.thank_you = " Thankyou for the order. ";
        this.order_id_full = "";
        this.order_id = "";
        this.order_locator = page.locator(".col-text");
    }

    async ordered_page_assertion()
    {
        await this.page.locator("h1.hero-primary").waitFor();
        
        await this.expect(this.page.locator("h1.hero-primary")).toHaveText(this.thank_you)
    }

    async fetch_order_no()
    {
        this.order_id_full = await this.page.locator("label.ng-star-inserted").textContent();
        this.order_id = this.order_id_full.trim().split("|")[1]; // Trim will remove the spaces and split will split using the delimeter
        console.log(this.order_id);
        console.log("Order ID: ",this.order_id_full)
    }

    async select_order_from_orders_page()
    {
        await this.page.locator('label[routerlink="/dashboard/myorders"]').click();
        
        await this.page.locator("tbody").waitFor();

        // Looping through the tables
        const row = this.page.locator("tbody tr");
        // const table_count = table.locator("th").count();
        
        for(let i=0; i < await row.count(); ++i)
        {
            const rowOrderId = await row.nth(i).locator("th").textContent();

            if (this.order_id_full.includes(rowOrderId))
            {
                await row.nth(i).locator("button").first().click();
                break;
            }

        }
    }

    async final_assertion()
    {
        const orderIdDetails = await this.order_locator.textContent();
        
        this.expect(this.order_id_full.includes(orderIdDetails)).toBeTruthy();
        await this.expect(this.order_locator).toContainText(this.order_id);
    }

}

module.exports = {OrderReviewPage};
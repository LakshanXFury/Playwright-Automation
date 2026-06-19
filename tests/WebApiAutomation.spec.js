const {test, expect, request} = require("@playwright/test");

const {APIUtils} = require('./Utils/APIUtils');

const  LoginPayLoad = {userEmail: "fury@gmail.com", userPassword: "Test@123"};
const  OrderPayload = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};

// let token;
// let API_orderID;

let response

test.beforeAll( async()=> // Whatever code is written, it will execute first which is in this block
{
    const apicontext = await request.newContext({ignoreHTTPSErrors:true});
    const apiUtils = new APIUtils(apicontext, LoginPayLoad);

    response = await apiUtils.createOrder(OrderPayload);







//     const loginResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data:LoginPayLoad});

//     // Assertion to check if the request is successful
//     expect(loginResponse.ok()).toBeTruthy(); 

//     const login_ResponseJson = await loginResponse.json();
//     token = login_ResponseJson.token;

//     console.log(token);

//     // ----------- Create Order API
//     const orderResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
//         {
//             data:OrderPayload,
//             headers:{
//                 'Authorization' : token,
//                 'Content-type' : 'application/json'
//             }
//         }
//     )

//     const orderResponse_Json = await orderResponse.json();
//     console.log(orderResponse_Json);
//     API_orderID = orderResponse_Json.orders[0]
//     console.log(API_orderID);
});

test.beforeEach( ()=> // Whatever code is written, it will execute each time before each tests
{

});


test("Place the order",async ({page})=>
{

    // To insert the API Token which is generated
    // Authentication bypass using API token injection
    await page.addInitScript(value =>
    {
        window.localStorage.setItem('token',value);
    }, response.token);

    

    await page.goto("https://rahulshettyacademy.com/client/");



     // Variables
    const product_name = "ZARA COAT 3"
    const products = page.locator(".card-body");



    await page.locator('button', { hasText: 'ORDERS' }).click();
    
    await page.locator("tbody").waitFor();


    // Looping through the tables
    const row = page.locator("tbody tr");
    // const table_count = table.locator("th").count();
    
    for(let i=0; i < await row.count(); ++i)
    {
        const rowOrderId = await row.nth(i).locator("th").textContent();

        if (response.API_orderID.includes(rowOrderId))
        {
            await row.nth(i).locator("button").first().click();
            break;
        }

    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.API_orderID.includes(orderIdDetails)).toBeTruthy();

});
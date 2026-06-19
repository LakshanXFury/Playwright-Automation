class APIUtils
{
    constructor(apicontext,LoginPayLoad)
    {
        this.apicontext = apicontext, //Assigning the parameter to the local api context
        this.LoginPayLoad = LoginPayLoad
    }

    async getToken()
    {
        
        const loginResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data:this.LoginPayLoad});
        
        // Assertion to check if the request is successful
        // expect(loginResponse.ok()).toBeTruthy(); 
        
        const login_ResponseJson = await loginResponse.json();
        const token = login_ResponseJson.token;
        console.log(token);

        return token;
    }

    async createOrder(OrderPayload)
    {
        let response = {};
        response.token = await this.getToken();

        // ----------- Create Order API -------------------------
        const orderResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data:OrderPayload,
                headers:{
                    'Authorization' : response.token,
                    'Content-type' : 'application/json'
                }
            }
        )

        const orderResponse_Json = await orderResponse.json();
        console.log(orderResponse_Json);
        const API_orderID = orderResponse_Json.orders[0]
        console.log(API_orderID);
        
        // Assigning property for a JS object 
        response.API_orderID = API_orderID;
        
        return response;
    }
}

module.exports = {APIUtils};
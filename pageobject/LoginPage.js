class LoginPage {

    constructor(page)
    {
        this.page = page // Same like self inpython
        this.signInButton = page.locator("input#login");
        this.userName = page.locator("input#userEmail");
        this.password = page.locator("input#userPassword");
    }

    async goto_url()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username, password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();

        //wait till the network becomes idle
        await this.page.waitForLoadState("networkidle");

    }
}

module.exports = {LoginPage};  //Making this class available everywhere
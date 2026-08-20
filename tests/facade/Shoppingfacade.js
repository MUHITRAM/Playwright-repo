export class Shoppingfacade{
    constructor(page){
       this.page1=page;

    }
    async login(){

        await this.page1.locator('#user-name').fill('standard_user')
        await this.page1.locator('#password').fill('secret_sauce')

        await this.page1.locator('#login-button').click();
    }

}

    

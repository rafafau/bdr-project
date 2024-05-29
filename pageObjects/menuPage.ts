import { expect, type Page } from "@playwright/test";

export class MenuPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    protected async goToMenu(menuLabel: string){
        await this.page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
        await this.page.getByLabel('Show user menu').click();
        await this.page.getByRole('link', { name: menuLabel }).click();
    }

    async goToLogin(){
        await this.goToMenu('LOGIN');
    }
    async goToSingUp(){
        await this.goToMenu('SIGN UP');
    }
}
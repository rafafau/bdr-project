import { fakerPL } from "@faker-js/faker";
import { expect, type Page } from "@playwright/test";
import * as dotenv from 'dotenv'
dotenv.config()

export class LoginPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    protected async loginToPanel(login: string, password: string){
        await this.page.getByPlaceholder('Email').fill(login);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
    async passLoginToPanel(){
        await this.loginToPanel(process.env.LOGIN!, process.env.PASSWORD!);
    }
    async errorLoginToPanel(){
        await this.loginToPanel(fakerPL.internet.email(), fakerPL.internet.password());
    }
    protected async createNewAccount(login: string, password: string, secondPassowrd: string){
        await this.page.getByPlaceholder('Email').fill(fakerPL.internet.email());
        await this.page.getByPlaceholder('Password', { exact: true }).fill(password);
        await this.page.getByPlaceholder('Password Confirmation').fill(secondPassowrd);
        await this.page.getByRole('button', { name: 'Sign Up' }).click();
    }

    async passCreateNewAccount(){
        const password = fakerPL.internet.password()
        await this.createNewAccount(fakerPL.internet.email(), password, password)
    }
    async errorCreateNewAccount(){
        await this.createNewAccount(fakerPL.internet.email(), fakerPL.internet.password(), fakerPL.internet.password())
    }

    async checkPassLogin(){
        await expect(this.page.getByText('Logged in successfully')).toBeVisible();
    }
    async checkPassCreateNewAccount(){
        await expect(this.page.getByText('Welcome! You have signed up')).toBeVisible();
    }
    async checkErrorLogin(){
        await expect(this.page.getByText('Invalid email or password.')).toBeVisible();
    }
    async checkErrorCreateNewAccount(){
        await expect(this.page.getByText("Password Confirmation doesn't match Password")).toBeVisible();
    }
}
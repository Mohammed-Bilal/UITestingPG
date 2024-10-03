
import { Page } from '@playwright/test';

export class SampleAppPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/sampleapp'); 
    }

    async enterUsername(username: string) {
        await this.page.fill('input[name="UserName"]', username); 
    }

    async enterPassword(password: string) {
        await this.page.fill('input[name="Password"]', password); 
    }

    async clickLoginButton() {
        await this.page.click('#login'); 
    }

    async getWelcomeMessage(): Promise<string> {
        const welcomeMessage = await this.page.textContent('#loginstatus'); 
        return welcomeMessage ?? ''; 
    }
}

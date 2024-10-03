import { Page } from '@playwright/test';

export class TextInputPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/textinput');
    }

    async enterText(text: string) {
        await this.page.fill('input[type="text"]', text); 
    }

    async clickUpdateButton() {
        await this.page.click('#updatingButton'); 
    }

    async getButtonLabel(): Promise<string> {
        const label = await this.page.textContent('#updatingButton'); 
        return label?.trim() || ''; // Return trimmed label text or an empty string
    }
}

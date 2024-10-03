import { Page, Locator } from '@playwright/test';
import { baseURL } from '../playwright.config'; 

export class AjaxPage {
    readonly page: Page;
    readonly ajaxButton: Locator;
    readonly loadedLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ajaxButton = this.page.locator('#ajaxButton');
        this.loadedLabel = this.page.locator('.bg-success');
    }

    async navigate() {
        await this.page.goto(`${baseURL}/ajax`); 
    }

    async triggerAjaxRequest() {
        await this.ajaxButton.click();// Trigger the AJAX request by clicking the button
    }

    async getLabelText(): Promise<string> {
        const text = await this.loadedLabel.textContent();// Get the text content of the loaded label
        return text!; 
    }
}

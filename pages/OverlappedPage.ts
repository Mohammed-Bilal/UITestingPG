import { Page } from '@playwright/test';
import { baseURL } from '../playwright.config'; 

export class OverlappedPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(`${baseURL}/overlapped`); 
    }

    async enterId(id: string) {
        await this.page.fill('input#id', id); 
    }

    async scrollToOverflowDiv() {
        await this.page.evaluate(() => {
            const element = document.querySelector('div[style*="overflow-y: scroll"]'); // Find the scrollable div
            if (element) {
                element.scrollTop = element.scrollHeight; // Scroll to the bottom of the div
            }
        });
    }

    async enterName(name: string) {
        await this.page.fill('input#name', name); 
    }

    async validateInputValue(selector: string, expectedValue: string) {
        const inputValue = await this.page.inputValue(selector);
        if (inputValue !== expectedValue) {
            throw new Error(`Expected value "${expectedValue}", but got "${inputValue}"`); 
        }
    }
}

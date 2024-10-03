import { Page } from '@playwright/test';

export class ProgressBarPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/progressbar'); 
    }

    async startProgressBar() {
        await this.page.click('#startButton'); 
    }

    async waitForProgressBarToReach(targetPercentage: number) {
        await this.page.waitForFunction(
            (target) => {
                const progressBar = document.getElementById('progressBar')!; 
                return parseFloat(progressBar.getAttribute('aria-valuenow')!) >= target; // Check if it has reached the target percentage
            },
            targetPercentage, 
            { timeout: 30000 } 
        );
    }

    async stopProgressBar() {
        await this.page.click('#stopButton'); 
    }

    async getResult(): Promise<string> {
        const result = await this.page.textContent('#result'); 
        return result ?? ''; 
    }
}

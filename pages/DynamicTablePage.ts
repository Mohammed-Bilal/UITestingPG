import { Page } from '@playwright/test';
import { baseURL } from '../playwright.config'; 

export class DynamicTablePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(`${baseURL}/dynamictable`); 
    }

    async getCpuColumnIndex(): Promise<number> {
        const headers = await this.page.$$('[role="rowgroup"] [role="columnheader"]'); 
        for (let i = 0; i < headers.length; i++) {
            const headerText = await headers[i].textContent();
            if (headerText?.trim() === 'CPU') {
                return i; 
            }
        }
        throw new Error('CPU column not found'); 
    }

    async getChromeCpuValueFromTable(): Promise<string> {
        const cpuColumnIndex = await this.getCpuColumnIndex(); // Get the index of the CPU column
        const rows = await this.page.$$('[role="rowgroup"] [role="row"]'); 

        for (const row of rows) {
            const cells = await row.$$('span[role="cell"]'); // Get all cells in the current row
            if (cells.length > 0) {
                const processName = await cells[0].textContent(); // Get the process name from the first cell
                if (processName?.trim() === 'Chrome') {
                    const cpuValueText = await cells[cpuColumnIndex]?.textContent(); // Get the CPU value from the CPU column
                    return cpuValueText?.trim() || ''; 
                }
            }
        }
        throw new Error('Chrome process not found in the table'); 
    }

    async getChromeCpuValueFromLabel(): Promise<string> {
        const labelElement = await this.page.$('p.bg-warning'); 
        const labelText = await labelElement?.textContent();

        if (labelText) {
            const match = labelText.match(/Chrome CPU: (\d+(\.\d+)?)%/); // Extract CPU value from the label text
            if (match) {
                return match[1]; 
            }
        }
        throw new Error('CPU value not found in the yellow label'); 
    }
}

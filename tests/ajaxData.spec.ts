import { test, expect } from '@playwright/test';
import { AjaxPage } from '../pages/AjaxPage';
import { ajaxData } from '../fixtures/testData';

test('AJAX Data: Wait for Label Text', async ({ page }) => {
    const ajaxPage = new AjaxPage(page);

    await ajaxPage.navigate(); 
    await ajaxPage.triggerAjaxRequest(); 

    const loadedLabel = await page.waitForSelector('.bg-success', { timeout: 30000 }); // Wait for the success label to load
    expect(loadedLabel).toBeTruthy(); // Ensure the label is loaded

    const labelText = await ajaxPage.getLabelText(); 
    expect(labelText).toBe(ajaxData.expectedLabelText); 
});

import { test, expect } from '@playwright/test';
import { TextInputPage } from '../pages/TextInputPage';
import { textInputData } from '../fixtures/testData';

test('Text Input Scenario: Change Button Name', async ({ page }) => {
    const textInputPage = new TextInputPage(page); 

    await textInputPage.navigate(); 
    await textInputPage.enterText(textInputData.newButtonName); 
    await textInputPage.clickUpdateButton();

    // Get updated button label
    const buttonLabel = await textInputPage.getButtonLabel();
    
    expect(buttonLabel).toBeDefined();
    expect(buttonLabel).toBe(textInputData.newButtonName); 
});

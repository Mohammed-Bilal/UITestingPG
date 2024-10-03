import { test, expect } from '@playwright/test';
import { OverlappedPage } from '../pages/OverlappedPage';
import { testData } from '../fixtures/testData'; 

test('Overlapped Element Scenario: Validate input fields', async ({ page }) => {
    const overlappedPage = new OverlappedPage(page);

    await overlappedPage.navigate(); 
    await overlappedPage.enterId(testData.id); 
    await overlappedPage.scrollToOverflowDiv(); 
    await overlappedPage.enterName(testData.name); 

    await overlappedPage.validateInputValue('input#id', testData.id); 
    await overlappedPage.validateInputValue('input#name', testData.name); 
});

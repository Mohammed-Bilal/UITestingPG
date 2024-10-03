import { test, expect } from '@playwright/test';
import { SampleAppPage } from '../pages/SampleAppPage';
import { sampleAppData } from '../fixtures/testData';

test('Sample App Scenario: User Login', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page); 

    await sampleAppPage.navigate(); 
    await sampleAppPage.enterUsername(sampleAppData.username); 
    await sampleAppPage.enterPassword(sampleAppData.password); 
    await sampleAppPage.clickLoginButton(); 

    const welcomeMessage = await sampleAppPage.getWelcomeMessage(); 

    expect(welcomeMessage).toBeDefined(); 
    expect(welcomeMessage).not.toBe(''); 
    expect(welcomeMessage).toBe(`Welcome, ${sampleAppData.username}!`); 
});

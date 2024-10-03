import { test, expect } from '@playwright/test';
import { ProgressBarPage } from '../pages/ProgressBarPage';

test('Progress Bar Scenario: Reach 75% and Stop', async ({ page }) => {
    const progressBarPage = new ProgressBarPage(page); 

    await progressBarPage.navigate(); 
    await progressBarPage.startProgressBar(); 

    // Wait for progress to reach 75%
    await progressBarPage.waitForProgressBarToReach(75); 
    await progressBarPage.stopProgressBar(); 

    const resultText = await progressBarPage.getResult();

    await expect(resultText).toBeTruthy(); 
     // Match duration from the result text
    const durationMatch = resultText.match(/duration: (\d+)/);
    await expect(durationMatch).toBeTruthy(); 

    if (durationMatch) {
        const duration = parseInt(durationMatch[1], 10); 
        expect(duration).toBeGreaterThan(0); 
    }
});

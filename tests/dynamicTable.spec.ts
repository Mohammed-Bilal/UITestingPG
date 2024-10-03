import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../pages/DynamicTablePage';

test('Dynamic Table Scenario: Verify Chrome CPU value', async ({ page }) => {
    const dynamicTablePage = new DynamicTablePage(page);

    await dynamicTablePage.navigate(); 

    const chromeCpuValueFromLabel = await dynamicTablePage.getChromeCpuValueFromLabel(); // Get CPU value from label
    const chromeCpuValueFromTable = await dynamicTablePage.getChromeCpuValueFromTable(); // Get CPU value from table

    expect(chromeCpuValueFromTable).toBe(`${chromeCpuValueFromLabel}%`); 
});

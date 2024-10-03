import { Page, Locator, expect } from '@playwright/test';
import { baseURL } from '../playwright.config';

export class VisibilityPage {
    private page: Page;

    private locators: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            hideButton: this.page.locator('#hideButton'),
            invisibleButton: this.page.locator('#invisibleButton'),
            transparentButton: this.page.locator('#transparentButton'),
            notDisplayedButton: this.page.locator('#notdisplayedButton'),
            offscreenButton: this.page.locator('#offscreenButton'),
            zeroWidthButton: this.page.locator('#zeroWidthButton'),
            removedButton: this.page.locator('#removedButton'),
            overlappedButton: this.page.locator('#overlappedButton'),
            hidingLayer: this.page.locator('#hidingLayer'),
        };
    }

    async goto() {
        await this.page.goto(`${baseURL}/visibility`); 
    }

    async clickHideButton() {
        await this.locators.hideButton.click(); 
    }

    async expectEmptyAfterHide() {
        const emptyCell = this.page.locator('td:nth-of-type(2):text("")'); 
        await expect(emptyCell).toBeEmpty(); 
    }

    async checkAttribute(selector: string, attribute: string, expectedValue: string | null) {
        const element = this.page.locator(selector);
        await expect(element).toBeAttached(); // Ensure the element is attached to the DOM

        const attributeValue = await element.getAttribute(attribute);
        if (expectedValue === null) {
            expect(attributeValue).toBeNull(); 
        } else {
            expect(attributeValue).toBe(expectedValue); // Verify the attribute value matches
        }
    }

    async isRemovedButtonVisible(): Promise<boolean> {
        return await this.locators.removedButton.isVisible(); 
    }

    async isHidingLayerVisible(): Promise<boolean> {
        return await this.locators.hidingLayer.isVisible(); 
    }

    async getOverlappedButtonBoundingBox(): Promise<{ width: number; height: number } | null> {
        return await this.locators.overlappedButton.boundingBox(); // Get bounding box of the overlapped button
    }

    async isOverlappedButtonVisible(): Promise<boolean> {
        return await this.locators.overlappedButton.isVisible(); // Check if overlapped button is visible
    }
}

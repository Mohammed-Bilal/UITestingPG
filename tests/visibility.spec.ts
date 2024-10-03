import { test, expect } from '@playwright/test';
import { VisibilityPage } from '../pages/VisibilityPage';

test('must determine hidden buttons', async ({ page }) => {
    const visibilityPage = new VisibilityPage(page);
    await visibilityPage.goto(); 

    await visibilityPage.clickHideButton(); 

    await visibilityPage.expectEmptyAfterHide(); 

    // Check visibility attributes of various buttons
    await visibilityPage.checkAttribute('#invisibleButton', 'style', 'visibility: hidden;');
    await visibilityPage.checkAttribute('#transparentButton', 'style', 'opacity: 0;');
    await visibilityPage.checkAttribute('#notdisplayedButton', 'style', 'display: none;');
    await visibilityPage.checkAttribute('#offscreenButton', 'class', 'btn btn-info offscreen');
    await visibilityPage.checkAttribute('#zeroWidthButton', 'style', null); 

    // Check if removed button and overlapping button are visible
    const isRemovedButtonVisible = await visibilityPage.isRemovedButtonVisible();
    expect(isRemovedButtonVisible).toBe(false); 

    const isHidingLayerVisible = await visibilityPage.isHidingLayerVisible();
    const overlappedButtonBoundingBox = await visibilityPage.getOverlappedButtonBoundingBox();
    const isOverlappedButtonVisible = await visibilityPage.isOverlappedButtonVisible();

    // If the hiding layer is visible, verify overlapping button's bounding box
    if (isHidingLayerVisible) {
        expect(overlappedButtonBoundingBox).not.toBeNull(); 
        if (overlappedButtonBoundingBox) {
            expect(overlappedButtonBoundingBox.width).toBeGreaterThan(0); 
            expect(overlappedButtonBoundingBox.height).toBeGreaterThan(0); 
        }
    }
    // Ensure the overlapped button is visible
    expect(isOverlappedButtonVisible).toBe(true); // Ensure the overlapped button is visible
});

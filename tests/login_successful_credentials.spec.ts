import { test, expect } from "@playwright/test";

test.describe("Login Page Verification", () => {
  test("Verify email input field on login page", async ({ page }) => {
    // Given the user is on the login page
    await page.goto(
      "https://test.safefleetcloud.com/license-plate-aggregation/search"
    );

    // When the user checks the Email Input
    const emailInput = page.locator('input[placeholder="Email"]');
    await expect(emailInput).toBeVisible();

    // Then there is an input with "Email" Placeholder
    await expect(emailInput).toHaveAttribute("placeholder", "Email");
  });
});

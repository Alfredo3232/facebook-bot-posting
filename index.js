import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
import adblockPlugin from "puppeteer-extra-plugin-adblocker";

puppeteer.use(stealthPlugin());
puppeteer.use(
    adblockPlugin({
        blockTrackers              : true,
        blockTrackersAndAnnoyances : true
    })
);

(async () => {
    // Step 1: Launch the browser <-
    const browser = await puppeteer.launch({
        headless        : false, // Allows you to see the browser open and actions
        defaultViewport : false
    });

    // Step 2: Opens a new tab <-
    const page = await browser.newPage();

    // Step 4: Navigate the page to a URL <-
    await page.goto("https://www.airbnb.com/login", {
        waitUntil: "networkidle0"
    });

    // Click email button
    await page.waitForSelector('[data-testid="social-auth-button-email"]', {
        timeout: 5000
    });
    await page.click('[data-testid="social-auth-button-email"]');

    // Fill out email
    setTimeout(async () => {
        await page
            .locator("._1gj8ihx")
            .fill(process.env.email);
        await page
            .locator('[data-testid="signup-login-submit-btn"]')
            .click();
    }, Math.floor(Math.random() * 15000));

    // fill out password
    await page
        .locator('[data-testid="email-signup-password"]')
        .fill(process.env.password);
    await page
        .locator('[data-testid="signup-login-submit-btn"]')
        .click();

    // Step 5: Take a screenshot and save it <-
    await page.screenshot({ path: "example.png" });

    // Step 6: Close the browser <-
    // await browser.close();
})();

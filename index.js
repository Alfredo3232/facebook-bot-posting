import puppeteer from "puppeteer";

(async () => {
    // Step 1: Launch the browser <-
    const browser = await puppeteer.launch({
        headless: false // Allows you to see the browser open and actions
    });
    // Step 2: Opens a new tab <-
    const page = await browser.newPage();
    // Step 3: Navigate the page to a URL <-
    await page.goto("https://developer.chrome.com/");
    // Step 4: Take a screenshot and save it <-
    await page.screenshot({ path: "example.png" });
    // Step 5: Close the browser <-
    await browser.close();
})();

import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
import adblockPlugin from "puppeteer-extra-plugin-adblocker"; 

puppeteer.use(stealthPlugin());
puppeteer.use(adblockPlugin({
    blockTrackers: true,
    blockTrackersAndAnnoyances: true
}));


(async () => {
    // Step 1: Launch the browser <-
    const browser = await puppeteer.launch({
        headless: false, // Allows you to see the browser open and actions
        defaultViewport: false
    });

    // Step 2: Opens a new tab <-
    const page = await browser.newPage();

    // Step 4: Navigate the page to a URL <-
    await page.goto("https://www.airbnb.com/", {
        waitUntil: "networkidle0"
    });

    await page.locator(".atm_26_zbnr2t_1nos8r_uv4tnr").click();

    // await page.locator(".cnky2vc").fill('value');

    // Step 5: Take a screenshot and save it <-
    await page.screenshot({ path: "example.png" });

    // Step 6: Close the browser <-
    await browser.close();
})();

/**
 * E2E Tests using Puppeteer
 * Testing against example.com as a stable, publicly available site
 */

describe("E2E Browser Tests with Puppeteer", () => {
  describe("Page Navigation", () => {
    test("can navigate to example.com and get page title", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(typeof title).toBe("string");
    });

    test("page has an h1 element", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const h1 = await page.$("h1");
      expect(h1).not.toBeNull();
    });

    test("h1 text content is correct", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const h1Text = await page.$eval("h1", (el) => el.textContent.trim());
      expect(h1Text).toBe("Example Domain");
    });
  });

  describe("Page Content", () => {
    test("page has a paragraph element", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const p = await page.$("p");
      expect(p).not.toBeNull();
    });

    test("page contains a link", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const links = await page.$$("a");
      expect(links.length).toBeGreaterThan(0);
    });

    test("link has valid href attribute", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const href = await page.$eval("a", (el) => el.getAttribute("href"));
      expect(href).toBeTruthy();
      expect(href).toContain("http");
    });
  });

  describe("Viewport and Screenshot", () => {
    test("can set viewport size", async () => {
      await page.setViewport({ width: 1280, height: 720 });
      const viewport = await page.viewport();
      expect(viewport.width).toBe(1280);
      expect(viewport.height).toBe(720);
    });

    test("can take a screenshot without errors", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const screenshot = await page.screenshot({ encoding: "base64" });
      expect(screenshot).toBeTruthy();
      expect(typeof screenshot).toBe("string");
    });
  });

  describe("JavaScript Execution", () => {
    test("can evaluate JavaScript in browser context", async () => {
      await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
      const result = await page.evaluate(() => {
        return document.querySelectorAll("*").length;
      });
      expect(result).toBeGreaterThan(0);
    });

    test("browser has correct user agent", async () => {
      const userAgent = await page.evaluate(() => navigator.userAgent);
      expect(userAgent).toBeTruthy();
      expect(userAgent.toLowerCase()).toContain("mozilla");
    });
  });
});

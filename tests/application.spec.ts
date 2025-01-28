import { Page, test } from "@playwright/test";
import { Application } from "../src/page-object/application";

test.describe("kaleidoscope app", () => {
  test.describe.configure({ mode: "serial" });

  let page: Page;
  let application: Application;

  test.beforeAll(async ({ baseURL, browser }) => {
    page = await browser.newPage();
    application = new Application(page);

    await page.goto(`${baseURL}/program/sdet-test-scholarship`);
  });

  test("Create account", async ({}) => {
    await application.loginButton.click();
    await application.personalInfo();
    await application.submitButton.click();
  });

  test("Get to know you", async ({}) => {
    await application.gotToKnowYouPageInfo();
    await application.clickNextPageBtn();
  });

  test("Extra curricular activity", async ({}) => {
    await application.extraCurricularActivity();
    await application.extraCurricularActivity();
    await page.waitForTimeout(5000);
    await application.clickNextPageBtn();
  });

  test("High school info", async ({}) => {
    await application.highSchoolInfo();
    await application.clickNextPageBtn();
  });

  test("Write Essay", async ({}) => {
    await application.essayPageInfo();
    await application.clickNextPageBtn();
    await application.verifyPageCount();
    await application.reviewPageEssay.click();
    await application.verifyEssay();
    await application.submitButton.click();
  });

  test("Verify essay edit", async ({}) => {
    await page.waitForTimeout(5000);
    await page.waitForURL(
      "https://apply.mykaleidoscope.com/applicant/applications"
    );
    await application.viewApplication.click();
    await page.waitForTimeout(2000);
    await application.verifyEssayEdit();
  });
});

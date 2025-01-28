import { Page, test } from "@playwright/test";
import { Application } from "../page-object/application";

test.describe("kaleidoscope app", () => {
  test.describe.configure({ mode: "serial" });

  let page: Page;
  let application: Application;

  test.beforeAll(async ({ baseURL, browser }) => {
    page = await browser.newPage();
    application = new Application(page);

    await page.goto(`${baseURL}/program/sdet-test-scholarship`);
  });

  test("User Information form", async ({}) => {
    await application.clickLoginButton();
    await application.personalInfo();
    await application.clickSubmitButton();
    await application.gotToKnowYouPageInfo();
    await application.clickNextPageBtn();
    await application.extraCurricularActivity();
    await application.extraCurricularActivity();
    await page.waitForTimeout(5000);
    await application.clickNextPageBtn();
    await application.highScoolInfo();
    await application.clickNextPageBtn();
    await application.essayPageInfo();
    await application.clickNextPageBtn();
    await application.verifyPageCount();
    await application.clickReviewPageEssay();
    await application.verifyEssay();
    await application.clickSubmitButton();
    await page.waitForTimeout(5000);
    await page.waitForURL(
      "https://apply.mykaleidoscope.com/applicant/applications"
    );
    await application.clickViewApplication();
    await page.waitForTimeout(2000);
    await application.verifyEssayEdit();
  });
});

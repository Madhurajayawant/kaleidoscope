import { expect, Locator, Page } from "@playwright/test";
import {
  extraCurricuarData,
  randomSchoolName,
  randomUsername,
  userData,
} from "../page-object/common";

export class Application {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly Email: Locator;
  readonly nextButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly phoneNumber: Locator;
  readonly password: Locator;
  readonly securityCheck: Locator;
  readonly submitButton: Locator;
  readonly address: Locator;
  readonly state: Locator;
  readonly randomStateSelect: Locator;
  readonly city: Locator;
  readonly zipCode: Locator;
  readonly country: Locator;
  readonly randomCountrySelect: Locator;
  readonly nextPageButton: Locator;
  readonly highScoolName: Locator;
  readonly highScoolStreet: Locator;
  readonly highSchoolCity: Locator;
  readonly highScoolState: Locator;
  readonly randomHighScoolState: Locator;
  readonly highScoolZipCode: Locator;
  readonly GPA: Locator;
  readonly graduationYear: Locator;
  readonly uploadFile: Locator;
  readonly addEntryButton: Locator;
  readonly extraCurricularName: Locator;
  readonly numberOfyears: Locator;
  readonly leadershipRole: Locator;
  readonly involvement: Locator;
  readonly add: Locator;
  readonly school: Locator;
  readonly animal: Locator;
  readonly essayAnimal: Locator;
  readonly essaySchool: Locator;
  readonly pageAccordian: Locator;
  readonly reviewPageEssay: Locator;
  readonly viewApplication: Locator;
  readonly essayEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole("button", { name: "Log In to Apply" });
    this.Email = page.getByRole("textbox", { name: "Email Address" });
    this.nextButton = page.getByRole("button", { name: "Next" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.phoneNumber = page.getByRole("textbox", { name: "1 (702) 123-" });
    this.password = page.getByRole("textbox", { name: "Create a Password" });
    this.securityCheck = page.getByRole("checkbox", {
      name: "I confirm that I am at least",
    });
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.address = page.getByRole("textbox", {
      name: "Street Address",
      exact: true,
    });
    this.state = page.getByRole("textbox", { name: "State (Full)" });
    this.randomStateSelect = page.getByRole("option", {
      name: userData[0].states,
      exact: true,
    });
    this.city = page.getByRole("textbox", { name: "City" });
    this.zipCode = page.getByRole("textbox", { name: "Zip Code" });
    this.country = page.getByRole("textbox", { name: "Country" });
    this.randomCountrySelect = page.getByRole("option", {
      name: userData[0].country,
      exact: true,
    });
    this.nextPageButton = page.getByRole("button", { name: "Next Page" });
    this.highScoolName = page.getByRole("textbox", {
      name: "High School Name",
    });
    this.highScoolStreet = page.getByRole("textbox", {
      name: "High School Street Address",
      exact: true,
    });
    this.highSchoolCity = page.getByRole("textbox", {
      name: "High School City",
    });
    this.highScoolState = page.getByRole("textbox", {
      name: "High School State (Full)",
    });
    this.randomHighScoolState = page.getByRole("option", {
      name: userData[0].states,
      exact: true,
    });
    this.highScoolZipCode = page.getByRole("textbox", {
      name: "High School Zip Code",
    });
    this.GPA = page.getByRole("textbox", { name: "GPA" });
    this.graduationYear = page.getByRole("textbox", {
      name: "Year of High School Graduation",
    });
    this.uploadFile = page.locator('input[type="file"]');
    this.addEntryButton = page.getByRole("button", { name: "Add Entry" });
    this.extraCurricularName = page.getByRole("textbox", {
      name: "Extracurricular Activity Name",
    });
    this.numberOfyears = page.getByRole("textbox", {
      name: "Total Number of Years Involved",
    });
    this.leadershipRole = page.getByRole("textbox", {
      name: "List any leadership roles,",
    });
    this.involvement = page.getByRole("textbox", {
      name: "Description of Involvement",
    });
    this.add = page.getByRole("button", { name: "Add", exact: true });
    this.school = page.getByRole("checkbox", { name: "School" });
    this.animal = page.getByRole("checkbox", { name: "Animals" });
    this.essayAnimal = page.getByRole("textbox", {
      name: "Essay about Animals",
    });
    this.essaySchool = page.getByRole("textbox", {
      name: "Essay about School",
    });
    this.pageAccordian = page.getByTestId("page-accordion");
    this.reviewPageEssay = page
      .getByTestId("page-accordion")
      .getByText("Essay");
    this.viewApplication = page.getByRole("button", {
      name: "View Application",
    });
    this.essayEdit = page
      .getByTestId("page-accordion")
      .nth(4)
      .getByRole("button", { name: "Edit" });
  }

  /* All the action methods used for the test start here. */
  async clickLoginButton() {
    await this.loginButton.click();
  }

  async fillEmailID() {
    await this.Email.fill(randomUsername);
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async fillFirstName() {
    await this.firstName.fill(userData[0].firstName);
  }

  async fillLastName() {
    await this.lastName.fill(userData[0].lastName);
  }

  async fillPhoneNumber() {
    await this.phoneNumber.fill(userData[0].phoneNumber);
  }

  async fillPassword() {
    await this.password.fill(userData[0].password);
  }

  async checkSecurityBox() {
    await this.securityCheck.check();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async fillStreetAddress() {
    await this.address.fill(userData[0].streetAddress);
  }

  async fillState() {
    await this.state.click();
    await this.randomStateSelect.click();
  }
  async fillCity() {
    await this.city.fill(userData[0].city);
  }

  async fillZipCode() {
    await this.zipCode.fill(userData[0].zipCode);
  }

  async fillCountry() {
    await this.country.click();
    await this.randomCountrySelect.click();
  }
  async clickNextPageBtn() {
    await this.page.waitForTimeout(6000);
    await this.nextPageButton.dblclick();
    await this.page.waitForTimeout(6000);
  }

  async fillHighScoolName() {
    await this.highScoolName.fill(randomSchoolName);
  }

  async fillHighScoolStreet() {
    await this.highScoolStreet.fill(userData[0].streetAddress);
  }

  async fillHighSchoolCity() {
    await this.highSchoolCity.fill(userData[0].city);
  }

  async fillHighSchoolState() {
    await this.highScoolState.click();
    await this.randomHighScoolState.click();
  }

  async fillHighScoolZipCode() {
    await this.highScoolZipCode.fill(userData[0].zipCode);
  }

  async fillGPA() {
    await this.GPA.fill(userData[0].GPA);
  }

  async fillGraduationYear() {
    const currentYear = new Date().getFullYear();
    await this.graduationYear.click();
    await this.graduationYear.fill(currentYear.toString());
  }

  async fileUpload() {
    await this.uploadFile.setInputFiles("./test-data/My School Transcript.pdf");
  }

  async clickAddEntryBtn() {
    await this.addEntryButton.first().click();
  }

  async fillExtraCurricularName() {
    await this.extraCurricularName.fill(extraCurricuarData[0].randomActivity);
  }

  async fillyears() {
    await this.numberOfyears.fill(extraCurricuarData[0].totalYears);
  }

  async fillLeadershipRole() {
    await this.leadershipRole.fill(extraCurricuarData[0].randomWord);
  }

  async fillInvolvement() {
    await this.involvement.fill(extraCurricuarData[0].randomWord);
  }

  async clickAddBtn() {
    await this.add.click();
  }

  async checkSchool() {
    await this.school.check();
  }

  async checkAnimal() {
    await this.animal.check();
  }

  async fillEssayAnimal() {
    await this.essayAnimal.click();
    await this.essayAnimal.fill("Animal is Animal");
  }

  async fillEssaySchool() {
    await this.essaySchool.click();
    await this.essaySchool.fill("School is School");
  }

  async clickReviewPageEssay() {
    await this.reviewPageEssay.click();
  }

  async clickViewApplication() {
    await this.viewApplication.click();
  }

  async extraCurricularActivity() {
    await this.clickAddEntryBtn();
    await this.verifyExtraCurricularName();
    await this.fillExtraCurricularName();
    await this.verifyNumberOfyears();
    await this.fillyears();
    await this.fillLeadershipRole();
    await this.fillInvolvement();
    await this.clickAddBtn();
  }

  async personalInfo() {
    await this.fillEmailID();
    await this.clickNextButton();
    await this.fillFirstName();
    await this.fillLastName();
    await this.fillPhoneNumber();
    await this.fillPassword();
    await this.checkSecurityBox();
  }

  async gotToKnowYouPageInfo() {
    await this.page.waitForTimeout(3000);
    await this.fillStreetAddress();
    await this.fillState();
    await this.fillCity();
    await this.fillZipCode();
    await this.fillCountry();
  }

  async highScoolInfo() {
    await this.fillHighScoolName();
    await this.fillHighScoolStreet();
    await this.fillHighSchoolCity();
    await this.fillHighSchoolState();
    await this.fillHighScoolZipCode();
    await this.fillGPA();
    await this.fillGraduationYear();
    await this.fileUpload();
    await this.page.waitForTimeout(5000);
  }

  async essayPageInfo() {
    await this.checkSchool();
    await this.checkAnimal();
    await this.verifySchoolCheck();
    await this.verifyAnimalCheck();
    await this.fillEssaySchool();
    await this.fillEssayAnimal();
  }

  /* All the test assertion methods used for the test start here. */
  async verifyExtraCurricularName() {
    await expect(this.extraCurricularName).toBeVisible();
  }

  async verifyNumberOfyears() {
    await expect(this.numberOfyears).toBeVisible();
  }

  async verifySchoolCheck() {
    await expect(this.school).toBeChecked();
  }

  async verifyAnimalCheck() {
    await expect(this.animal).toBeChecked();
  }

  async verifyPageCount() {
    const pageCount = await this.pageAccordian.count();
    expect(pageCount).toEqual(4);
  }

  async verifyEssay() {
    await expect(this.page.getByText("Animal is animal")).toBeVisible();
    await expect(this.page.getByText("School is school")).toBeVisible();
  }

  async verifyEssayEdit() {
    await expect(this.essayEdit).not.toBeVisible();
  }
}

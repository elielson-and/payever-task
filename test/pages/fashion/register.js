const { By, until } = require('selenium-webdriver');
const { driver, baseUrl } = require('../../../utils/TestConfig.js');
const faker = require('faker');
const Home = require('../../components/fashion/Home');
const Register = require('../../components/fashion/Register');

class RegisterFashion {
  constructor() {
    this.driver = driver;
    this.url = baseUrl;
  }

  async openBrowser(testCase) {
    await this.driver.manage().deleteAllCookies();
    await this.driver.get(this.url + testCase);
  }
  async closeBrowser() {
    await this.driver.manage().deleteAllCookies();
    await this.driver.close();
  }

  async fillUserData() {
    const register = new Register();
    try {
      // Form
      await this.driver.wait(until.elementLocated(By.xpath(register.userForm)), 60000);
      // First name
      await this.driver.findElement(By.xpath(register.firstName.field)).click();
      await this.driver.actions().sendKeys(register.firstName.answer).perform();
      // last Name
      await this.driver.findElement(By.xpath(register.lastName.field)).click();
      await this.driver.actions().sendKeys(register.lastName.answer).perform();
      // Email
      await this.driver.findElement(By.xpath(register.email.field)).click();
      await this.driver.actions().sendKeys(register.email.answer).perform();
      // Password
      await this.driver.findElement(By.xpath(register.password.field)).click();
      await this.driver.actions().sendKeys(register.password.answer).perform();
      // Password Confirmation
      await this.driver.findElement(By.xpath(register.passwordConfirmation.field)).click();
      await this.driver.actions().sendKeys(register.passwordConfirmation.answer).perform();

      // Signup button
      await this.driver.sleep(1000);
      this.driver.findElement(By.xpath(register.signUpButton)).click();

      return true;

    } catch (error) {
      return false;
    }

  }

  async fillBusinessData() {
    const register = new Register();
    try {
      await this.driver.wait(until.elementLocated(By.xpath(register.businessForm)), 60000);

      await this.driver.findElement(By.xpath(register.businessType.field)).click();
      this.driver.findElement(By.xpath(register.businessType.choice)).click();

      // Company 
      await this.driver.findElement(By.xpath(register.company.field)).click();
      await this.driver.actions().sendKeys(register.company.answer).perform();

      // Status
      await this.driver.findElement(By.xpath(register.businessStatus.field)).click();
      await this.driver.findElement(By.xpath(register.businessStatus.choice)).click();

      // Sales
      await this.driver.findElement(By.xpath(register.businessSales.field)).click();
      await this.driver.findElement(By.xpath(register.businessSales.choice)).click();

      // Industry
      await this.driver.findElement(By.xpath(register.businessIndustry.field)).click();
      await this.driver.findElement(By.xpath(register.businessIndustry.choice)).click();

      // Phone number
      await this.driver.findElement(By.xpath(register.phoneNumber.countryCodeField)).click();
      await this.driver.findElement(By.xpath(register.phoneNumber.choice)).click();
      await this.driver.findElement(By.xpath(register.phoneNumber.phoneNumberField)).click();
      await this.driver.actions().sendKeys(register.phoneNumber.phoneNumber).perform();
      await this.driver.sleep(1000);
      this.driver.findElement(By.xpath(register.registerButton)).click();

      return true;
    } catch (error) {
      return false;
    }
  }

  // async skipGetStartedModal() {
  //   const home = new Home();
  //   try {
  //     await this.driver.wait(until.elementLocated(By.xpath(home.getStartedButton)), 60000);
  //     await this.driver.findElement(By.xpath(home.getStartedButton)).click()
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // }



}

module.exports = new RegisterFashion()

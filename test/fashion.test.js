const { expect } = require('chai');
const RegisterFashion = require('./pages/fashion/register');
const HomeFashion = require('./pages/fashion/home');

describe('Registration test case', () => {

  const testCase = '/fashion'

  it('Should display page', async function () {
    await RegisterFashion.openBrowser(testCase);
  });

  it('Should create an account', async function () {
    expect(await RegisterFashion.fillUserData()).to.be.true
  });

  it('Should fill business data', async function () {
    expect(await RegisterFashion.fillBusinessData()).to.be.true
  });

  it('Should skip getStarted modal al', async function () {
    expect(await HomeFashion.skipGetStartedModal()).to.be.true;
  });

  // it('Should set default apps', async function () {
  //   expect(await RegisterFashion.editApps()).to.be.true;
  // });

  after(async () => {
    await RegisterFashion.closeBrowser();
  });
});

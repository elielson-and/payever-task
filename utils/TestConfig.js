const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { baseUrl } = require('../env.js');

const globalTimeout = 60000;

// chrome driver
const driver = new Builder()
    .forBrowser('chrome')
    .build();

module.exports = {
    expect,
    driver,
    globalTimeout,
    baseUrl
};

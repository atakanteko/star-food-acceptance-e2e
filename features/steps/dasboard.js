const {Given, When, Then} = require('@cucumber/cucumber');
const openUrl = require('../support/action/openUrl')
const clickElement = require('../support/action/clickElement')
const waitForSelector = require('../support/action/waitForSelector')
const sendKeys = require('../support/action/sendKeys')
const checkElementText = require('../support/check/checkElementText')
const checkUrl = require('../support/check/checkUrl')
const {url} = require('../global/commonData')
const {dashboard} = require('../steps/commonData')

Given(/^that user on dashboard$/, async function () {
    await openUrl.call(this, `${url}`);
});

When(/^user landing dashboard$/, async function () {
    await checkUrl.call(this,false,'http://localhost:3000/')
});

Then(/^user should see "([^"]*)" text$/, async function (param) {
    const element = dashboard[param]
    await waitForSelector.call(this, element)
});

When(/^user click "([^"]*)" button$/, async function (param) {
    const button = dashboard[param]
    await clickElement.call(this, button,button)
});

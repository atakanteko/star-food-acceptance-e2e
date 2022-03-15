const {Given, When, Then} = require('@cucumber/cucumber');
const clickElement = require('../support/action/clickElement')
const waitForSelector = require('../support/action/waitForSelector')
const sendKeys = require('../support/action/sendKeys')
const checkHasClass = require('../support/check/checkHasClass')
const {createOrder} = require('../steps/commonData')


Given(/^user types "([^"]*)" to "([^"]*)" input$/, async function (userInput, param) {
    const targetElement = createOrder[param]
    await waitForSelector.call(this,targetElement)
    await sendKeys.call(this,targetElement, userInput)
});

When(/^user selects items in "([^"]*)" select box$/, async function (param) {
    const targetElement = createOrder[param]
    await waitForSelector.call(this, targetElement)
    await clickElement.call(this, targetElement, targetElement);
    const btn = await this.page.$(".v-list-item");
    await btn.click()
});
Then(/^user sees "([^"]*)" button's background color as green$/, async function (param) {
    const targetElement = createOrder[param]
    await waitForSelector.call(this, targetElement)
    await checkHasClass.call(this, targetElement, false, "greenBg")
});

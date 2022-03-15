const {Given, When, Then} = require('@cucumber/cucumber');
const clickElement = require('../support/action/clickElement')
const waitForSelector = require('../support/action/waitForSelector')
const sendKeys = require('../support/action/sendKeys')
const checkHasClass = require('../support/check/checkHasClass')
const checkElementExistsv2 = require('../support/check/checkElementExistsv2')
const {createOrder} = require('../steps/commonData')
const checkContainsText = require("../support/check/checkContainsText");


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
Given(/^user click "([^"]*)" button$/, async function (param) {
    const targetElement = createOrder[param]
    await waitForSelector.call(this, targetElement)
    await clickElement.call(this, targetElement, targetElement);
});
Then(/^user Mehmet sees the added meal$/, async function () {
    const targetElement = createOrder['First Ordered Item']
    await waitForSelector.call(this, targetElement)
    await checkElementExistsv2.call(this, targetElement,false);
});
Given(/^user select "([^"]*)" radio$/, async function (radioType) {
    const targetElement = createOrder[radioType]
    await waitForSelector.call(this, targetElement)
    await clickElement.call(this, targetElement, targetElement);
    await this.page.waitForTimeout(5000)
});
Then(/^user Elif sees transfer type as "([^"]*)"$/, async function (transType) {
    const targetElement = createOrder['First Ordered Item']
    const type = createOrder[transType]
    const generic = targetElement + ' ' + type
    await waitForSelector.call(this, targetElement)
    await waitForSelector.call(this, type)
    await checkContainsText.call(this, generic, false, "Takeaway");
});
Then(/^user Kemal sees "([^"]*)" in the header$/, async function (text) {
    const targetElement = createOrder['Added Item Number Box']
    await waitForSelector.call(this, targetElement)
    await checkContainsText.call(this, targetElement, false, text);

});
Then(/^user Kemal sees "([^"]*)" in the drawer$/, async function (numberOfMeals) {
    const targetElement = createOrder['Added Number Of Item']
    await waitForSelector.call(this, targetElement)
    await checkContainsText.call(this, targetElement, false, numberOfMeals);
});

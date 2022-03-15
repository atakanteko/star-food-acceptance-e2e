const assert = require("assert");

module.exports = async function (selector, text, not=false) {
    const result = await this.page.$eval(selector, (element) => {
        return element.closest(".app-input").querySelector('.v-messages__message').innerText;
    })
    assert.strictEqual(result, text, `Expected "${selector}'s" error message to be "${text}" but it was "${result}"`);
}

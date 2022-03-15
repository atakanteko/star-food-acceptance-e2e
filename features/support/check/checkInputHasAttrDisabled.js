const assert = require('assert').strict;

module.exports = async function (selector, preset) {

    const isDisabled = await this.page.$eval(selector, (i) => {
        return i.disabled;
    });
    assert.strictEqual(isDisabled, preset);
}

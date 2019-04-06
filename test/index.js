const plugin = require('../src');
const {assert} = require('chai');

describe('my-test', function () {

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    it('should an object', function () {
        assert.typeOf(plugin, 'function');
    });

});
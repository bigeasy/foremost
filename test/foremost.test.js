describe('foremost', () => {
    const assert = require('assert')
    it('can find the foremost module', () => {
        assert(require('..')('mocha'), 'require')
    })
})

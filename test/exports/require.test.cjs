const assert = require('assert');
const unlink = require('tsds-unlink');

describe('exports .cjs', () => {
  it('defaults', () => {
    assert.equal(typeof unlink, 'function');
  });
});

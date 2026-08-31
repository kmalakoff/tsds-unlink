import assert from 'assert';
import unlink from 'tsds-unlink';

describe('exports .mjs', () => {
  it('defaults', () => {
    assert.equal(typeof unlink, 'function');
  });
});

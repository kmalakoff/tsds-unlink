import assert from 'assert';
import unlink from 'tsds-unlink';

describe('exports .ts', () => {
  it('defaults', () => {
    assert.equal(typeof unlink, 'function');
  });
});

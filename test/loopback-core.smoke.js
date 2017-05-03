const expect = require('@loopback/testlab').expect;

describe('quick start smoke test', () => {
  it('imports the @loopback/core dependency correctly', () => {
    const app = require('..');
    expect(app.bind).to.be.type('function');
  });
});

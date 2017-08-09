const testlab = require('@loopback/testlab');
const createApp = require('../dist/application').createApp;
const expect = testlab.expect;
const validateApiSpec = testlab.validateApiSpec;

describe('validate Api Spec', () => {
  let app = createApp();

  it('app.getApiSpec is function', () => {
    expect(app.getApiSpec).to.be.type('function');
  });

  let apiSpec = app.getApiSpec();
  let defaultPreamble = {
    swagger: '2.0',
    basePath: '/',
    info: {
      title: 'LoopBack Application',
      version: '1.0.0',
    }
  };

  it('apiSpec is defined', () => {
    expect(apiSpec).to.containEql(defaultPreamble);
  });

  it('apiSpec is valid', async () => {
    await validateApiSpec(apiSpec);
  });
});

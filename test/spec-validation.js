const testlab = require('@loopback/testlab');
const createApp = require('../dist/application').createApp;
const expect = testlab.expect;
const validateApiSpec = testlab.validateApiSpec;

describe('Api Spec', () => {
  let app;
  let apiSpec;
  before(initApp);

  describe('validate Api Spec', () => {
    const defaultPreamble = {
      swagger: '2.0',
      basePath: '/',
      info: {
        title: 'LoopBack Application',
        version: '1.0.0',
      }
    };

    it('app.getApiSpec is function', () => {
      expect(app.getApiSpec).to.be.type('function');
    });

    it('apiSpec is defined', () => {
      expect(apiSpec).to.containEql(defaultPreamble);
    });

    it('apiSpec is valid', () => {
      validateApiSpec(apiSpec);
    });

  });

  function initApp() {
    app = createApp();
    apiSpec = app.getApiSpec();
  }

});

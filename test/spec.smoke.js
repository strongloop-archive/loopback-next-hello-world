const testlab = require('@loopback/testlab');
const createApp = require('../dist/application').createApp;
const expect = testlab.expect;
const validateApiSpec = testlab.validateApiSpec;

const http = require('http');
const Dredd = require('dredd');
const port = 3030;
const localhost = 'http://localhost:' + port;
const dreddConfig = {
  server: localhost + '/', // base path to the end points
  options: {
    silent: true,
    path: [localhost + '/openapi.json'], // to download our apiSpec
  }
};

describe('Api Spec End Points', () => {
  let app;
  let apiSpec;
  let server;
  let dredd;
  before(initEnvironment.bind(null, dreddConfig));

  // TODO do the async testing right !!!
  describe('test end points', () => {

    it('passes "req parameter and res result" match test', () => {
      dredd.run((err, stats) => {
        // err is present if anything went wrong
        expect(!!err).to.be.false();
        let ctFailures = faiclureCount(stats);
        // otherwise stats is an object with useful statistics
        expect(ctFailures).to.be.eql(0);
        server.close();
      });
    });

  });

  function initEnvironment(config) {
    app = createApp();
    apiSpec = app.getApiSpec();
    server = startApp(app);
    dredd = new Dredd(config);
  }

  function startApp(app) {
    const server = http.createServer(app.handleHttp);
    server.listen(port, (err) => {
      if (err) throw err;
    });
    return server;
  }

  function faiclureCount(stats) {
    if (!stats) return 999;
    return (stats.failures + stats.errors);
  }

});

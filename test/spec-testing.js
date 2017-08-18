// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

const Dredd = require('dredd');
const expect = require('@loopback/testlab').expect;
const HelloWorldApp = require('../lib/application').HelloWorldApp;
const http = require('http');

const port = 3030; // use this port for Dredd testing only
const localhost = 'http://localhost:' + port;
const dreddConfig = {
  server: localhost + '/', // base path to the end points
  options: {
    level: 'verbose',
    silent: true, // false for helpful debugging info
    path: [localhost + '/openapi.json'], // to download apiSpec from the service
  }
};

describe('Api Spec End Points', () => {
  let server;
  let error;
  let ctFailures;
  beforeEach(done => {
    initEnvironment(dreddConfig, (dredd) => {
      testApi(dredd, done);
    });
  });
  afterEach(done => {
    server.close();
    done();
  });

  describe('Test end points', () => {
    it('passes "req parameter and res result" match test', () => {
      expect(error).to.be.eql(null);
      expect(ctFailures).to.be.eql(0);
    });
  });

  function testApi(dredd, done) {
    dredd.run((err, stats) => {
      // err is present if anything went wrong and stats is nill
      error = err;
      // otherwise stats is an object with useful statistics
      ctFailures = failureCount(stats);
      done();
    });
  }

  async function initEnvironment(config, next) {
    const app = new HelloWorldApp();
    const svr = http.createServer(app.handleHttp);
    svr.listen(port, (err) => {
      if (err) throw err;
      server = svr;
      next(new Dredd(config));
    });
  }

  function failureCount(stats) {
    if (!stats) return -1;
    return (stats.failures + stats.errors);
  }

});

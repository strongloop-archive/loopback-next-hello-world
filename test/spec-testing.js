// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

const {CoreBindings} = require('@loopback/core');
const Dredd = require('dredd');
const expect = require('@loopback/testlab').expect;
const HelloWorldApp = require('../lib/application').HelloWorldApp;

describe('Api Spec End Points', () => {
  let dredd;
  before(initEnvironment);

  describe('input/output test', () => {
    it('passes match', done => {
      dredd.run((err, stats) => {
        expect(err).to.be.eql(null);
        expect(stats.failures).to.be.eql(0);
        expect(stats.errors).to.be.eql(0);
        expect(stats.skipped).to.be.eql(0);
        done();
      });
    });
  });

  async function initEnvironment() {
    const app = new HelloWorldApp();
    await app.start();
    const port = await app.get(CoreBindings.HTTP_PORT);
    const localhostAndPort = 'http://localhost:' + port;
    const config = {
      server: localhostAndPort, // base path to the end points
      options: {
        level: 'verbose',
        silent: true, // false for helpful debugging info
        path: [localhostAndPort + '/openapi.json'], // to download apiSpec from the service
      }
    };
    dredd = new Dredd(config);
  }

});

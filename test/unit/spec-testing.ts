// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {Application, CoreBindings} from '@loopback/core';
import Dredd = require('dredd');
import {expect} from '@loopback/testlab';
import {HelloWorldApp} from '../..';

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
    const app: Application = new HelloWorldApp();
    await app.start();
    const port: number = await app.get(CoreBindings.HTTP_PORT);
    const localhostAndPort: string = 'http://localhost:' + port;
    const config: object = {
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

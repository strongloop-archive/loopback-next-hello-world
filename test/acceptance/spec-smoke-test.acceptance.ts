// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {Application, CoreBindings} from '@loopback/core';
var Dredd = require('dredd');
import {expect} from '@loopback/testlab';
import {HelloWorldApp} from '../..';
import {givenProduct, givenEmptyDatabase} from '../helpers/database.helpers';

describe('Api Spec End Points', () => {
  let dredd: any;
  before(initEnvironment);

  describe('input/output test', () => {
    before(setupTestData);

    it('passes match', done => {
      dredd.run((err: Error, stats: object) => {
        if (err) return done(err);
        expect(stats).to.containDeep({
          failures: 0,
          errors: 0,
          skipped: 0,
        });
        done();
      });
    });
  });

  async function initEnvironment() {
    // By default, the port is set to 3000.
    const app: Application = new HelloWorldApp();
    // For testing, we'll let the OS pick an available port by setting
    // CoreBindings.HTTP_PORT to 0.
    app.bind(CoreBindings.HTTP_PORT).to(0);
    // app.start() starts up the HTTP server and binds the acquired port
    // number to CoreBindings.HTTP_PORT.
    await app.start();
    // Get the real port number.
    const port: number = await app.get(CoreBindings.HTTP_PORT);
    const localhostAndPort: string = 'http://localhost:' + port;
    const config: object = {
      server: localhostAndPort, // base path to the end points
      options: {
        level: 'fail', // report 'fail' case only
        silent: false, // false for helpful debugging info
        path: [localhostAndPort + '/swagger.json'], // to download apiSpec from the service
      }
    };
    dredd = new Dredd(config);
  }

  async function setupTestData() {
    await givenEmptyDatabase();
    await givenProduct({name: 'pen', slug: 'pen'});
  }
});

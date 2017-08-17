// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

const HelloWorldApp = require('../lib/application').HelloWorldApp;
const validateApiSpec = require('@loopback/testlab').validateApiSpec;

describe('Api Spec', () => {
  let apiSpec;
  before(initApiSpec);

  describe('validate Api Spec', () => {

    it('is valid', async () => {
      await validateApiSpec(apiSpec);
    });
  });

  function initApiSpec() {
    let app = new HelloWorldApp();
    apiSpec = app.getApiSpec();
  }
});

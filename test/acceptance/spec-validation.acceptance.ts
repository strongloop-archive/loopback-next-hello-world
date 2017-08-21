// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {HelloWorldApp} from '../..';
import {Application} from '@loopback/core';
import {OpenApiSpec} from '@loopback/openapi-spec';
import {validateApiSpec} from '@loopback/testlab';

describe('Api Spec', () => {
  let apiSpec: OpenApiSpec;
  before(initApiSpec);

  describe('validate Api Spec', () => {

    it('is valid', async () => {
      console.log(apiSpec);
      await validateApiSpec(apiSpec);
    });
  });

  function initApiSpec() {
    let app: Application = new HelloWorldApp();
    apiSpec = app.getApiSpec();
  }

});

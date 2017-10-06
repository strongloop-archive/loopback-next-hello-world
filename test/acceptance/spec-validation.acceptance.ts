// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {HelloWorldApp} from '../..';
import {Application} from '@loopback/core';
import {OpenApiSpec} from '@loopback/openapi-spec';
import {validateApiSpec} from '@loopback/testlab';
import {RestServer, RestComponent} from '@loopback/rest';

describe('Api Spec', () => {
  let apiSpec: OpenApiSpec;
  before(initApiSpec);

  describe('validate Api Spec', () => {
    it('is valid', async () => {
      await validateApiSpec(apiSpec);
    });
  });

  async function initApiSpec() {
    let app: Application = new HelloWorldApp();
    let restServer: RestServer = await app.getServer(RestServer);
    apiSpec = restServer.getApiSpec();
  }
});

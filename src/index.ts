// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {CoreBindings} from '@loopback/core';
import {HelloWorldApp} from './application';
export {HelloWorldApp};
import {RestServer, RestBindings} from '@loopback/rest';

if (require.main === module.parent) {
  // executed from the console
  const app = new HelloWorldApp();
  app.start().catch(err => {
    console.error('Cannot start the application! ', err);
    process.exit(1);
  });
}

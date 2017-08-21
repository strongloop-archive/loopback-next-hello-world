// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {CoreBindings} from '@loopback/core';
import {HelloWorldApp} from './application';
export {HelloWorldApp};

if (require.main === module.parent) {
  // executed from the console
  const app = new HelloWorldApp();

  app.start().then(
    () => {
      let port = app.getSync(CoreBindings.HTTP_PORT);
      console.log(`HTTP server listening on port ${port}`);
      console.log(`Run \'curl localhost:${port}/helloworld?name=YOUR_NAME\' to try it out`);
    },
    err => {
      console.error('Cannot start the application', err);
      process.exit(1);
    });
} 

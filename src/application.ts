// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {Application} from '@loopback/core';
import {AuthenticationComponent, AuthenticationBindings} from '@loopback/authentication';
import {validateApiSpec} from '@loopback/testlab'
import {MyAuthStrategyProvider} from './providers/auth-strategy';
import {HelloWorldController} from './controllers/hello-world';
import {MySequence} from './sequence';

export class HelloWorldApp extends Application {
  constructor() {
    super({
      components: [AuthenticationComponent],
      sequence: MySequence,
    });
    this.bind(AuthenticationBindings.STRATEGY)
      .toProvider(MyAuthStrategyProvider);
    this.controller(HelloWorldController);
  }
}

// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {api, inject} from '@loopback/core';
import {controllerSpec} from './hello-world.api';
import {authenticate, AuthenticationBindings, UserProfile} from '@loopback/authentication';

@api(controllerSpec)
export class HelloWorldController {
  constructor(@inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile) {}

  @authenticate('BasicStrategy')
  helloWorld(name: string) {
      return `Hello world ${name} ` + JSON.stringify(this.user);
  }
}

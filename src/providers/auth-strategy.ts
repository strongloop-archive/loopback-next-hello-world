// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {
  inject,
  Provider,
  ValueOrPromise,
} from '@loopback/context';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
} from '@loopback/authentication';

import {Strategy} from 'passport';
import {BasicStrategy} from 'passport-http';

export class MyAuthStrategyProvider implements Provider<Strategy> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
  ) {}


  value() : ValueOrPromise<Strategy> {
    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      return new BasicStrategy(this.verify);
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(username: string, password: string, cb: Function) {
    let userProfile = {
      username: username,
      password: password,
    };
    return cb(null, userProfile);
  }
}

import {inject, Provider, ValueOrPromise} from '@loopback/context';
import {BindingKeys, AuthenticationMetadata} from '@loopback/authentication';

import {Strategy} from 'passport';
import {BasicStrategy} from 'passport-http';

export class MyAuthStrategyProvider implements Provider<Strategy> {
  constructor(
    @inject(BindingKeys.Authentication.METADATA)
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
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, userProfile) when user is authenticated
    let userProfile = {
      // user profile
    };
    return cb(null, userProfile);
  }
}

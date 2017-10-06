// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {inject} from '@loopback/core';
import {api} from '@loopback/rest';
import {helloWorldApi} from '../apidefs/hello-world.api';
import {
  authenticate,
  AuthenticationMetadata,
  AuthenticationBindings,
  UserProfile,
} from '@loopback/authentication';
import {UserRepository} from '../repositories/user.repository';
import {User} from '../models/user.model';

@api(helloWorldApi)
export class HelloWorldController {
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
    @inject('repositories.UserRepository') private repository: UserRepository,
  ) {}

  @authenticate('BasicStrategy')
  async helloWorld(name?: string) {
    return `Hello world ${name} ` + JSON.stringify(this.user);
  }

  @authenticate('BasicStrategy')
  async getUsers(name?: string): Promise<User[]> {
    let filter = name ? {where: {username: name}} : {};
    return await this.repository.find(filter);
  }

  @authenticate('BasicStrategy')
  async createUser(userInfo: Partial<User>) {
    return await this.repository.create(new User(userInfo));
  }
}

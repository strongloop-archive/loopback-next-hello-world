// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {Application} from '@loopback/core';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import {validateApiSpec} from '@loopback/testlab';
import {MyAuthStrategyProvider} from './providers/auth-strategy';
import {HelloWorldController} from './controllers/hello-world';
import {MySequence} from './sequence';
import {UserRepository} from './repositories/user.repository';
import {Class, Repository, RepositoryMixin} from '@loopback/repository';
import {RestComponent, RestServer, RestBindings} from '@loopback/rest';
import {spec} from './apidefs/swagger';

export class HelloWorldApp extends RepositoryMixin(Application) {
  constructor() {
    super({
      components: [AuthenticationComponent, RestComponent],
      repositories: [UserRepository],
    });
    this.controller(HelloWorldController);
  }

  async start() {
    const server = await this.getServer(RestServer);
    server.sequence(MySequence);
    server.api(spec);
    server
      .bind(AuthenticationBindings.STRATEGY)
      .toProvider(MyAuthStrategyProvider);
    await super.start();
    let port = await server.get(RestBindings.PORT);
    console.log(`HTTP server listening on port ${port}`);
    console.log(
      `Run \'curl localhost:${port}/helloworld?name=YOUR_NAME\' to try it out`,
    );
  }
}

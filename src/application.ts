// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {Application} from '@loopback/core';
import {AuthenticationComponent, AuthenticationBindings} from '@loopback/authentication';
import {validateApiSpec} from '@loopback/testlab'
import {MyAuthStrategyProvider} from './providers/auth-strategy';
import {HelloWorldController} from './controllers/hello-world';
import {MySequence} from './sequence';
import {spec} from './spec';
import {ProductController} from './controllers/product.controller';
import {ProductRepository} from './repositories/product.repository';

export class HelloWorldApp extends Application {
  constructor() {
    super({
      components: [AuthenticationComponent],
      sequence: MySequence,
    });
    this.api(spec);
    this.bind(AuthenticationBindings.STRATEGY)
      .toProvider(MyAuthStrategyProvider);
    this.controller(HelloWorldController);
    this.controller(ProductController);
    this.bind('repositories.Product').toClass(ProductRepository);
  }
}

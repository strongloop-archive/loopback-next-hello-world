import {api, inject} from '@loopback/core';
import {apiSpec} from './hello-world.api';
import {UserProfile, authenticate} from '@loopback/authentication';

@api(apiSpec)
export class HelloWorldController {
  constructor(@inject('authentication.user') private user: UserProfile) {}

  @authenticate('BasicStrategy')
  helloWorld(name: string) {
      return `Hello world ${name}!`
  }
}

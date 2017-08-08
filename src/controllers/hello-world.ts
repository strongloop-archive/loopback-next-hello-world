import {api} from '@loopback/core';
import {apiSpec} from './hello-world.api';

@api(apiSpec)
export class HelloWorldController {
  helloWorld(name: string) {
      return `Hello world ${name}!`
  }
}

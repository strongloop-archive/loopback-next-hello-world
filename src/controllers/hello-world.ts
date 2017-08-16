import {api} from '@loopback/core';
import {createEmptyApiSpec, OpenApiSpec} from '@loopback/openapi-spec';
import {apiSpec} from './hello-world.api';

var openApiSpec: OpenApiSpec = createEmptyApiSpec();
Object.assign(openApiSpec, apiSpec);

@api(openApiSpec)
export class HelloWorldController {
  helloWorld(name: string) {
      return `Hello world ${name}!`
  }
}

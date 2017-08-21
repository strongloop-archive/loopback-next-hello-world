import * as lbOpenApiSpec from '@loopback/openapi-spec';
import {OpenApiSpec} from '@loopback/openapi-spec';
import {helloWorldApi} from './hello-world.api';

export let spec = lbOpenApiSpec.createEmptyApiSpec();
spec.info = {
  title: 'Hello World API',
  version: '1.0',
};
spec.swagger = '2.0';
spec.basePath = '/';
spec.definitions = {
  user: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID for a user instance.',
      },
      username: {
        type: 'string',
        description: 'The username for a user instance.',
      },
    },
    required: ['username'],
    example: {
      username: 'Ted',
    },
  },
};

spec = Object.assign({}, spec, helloWorldApi);

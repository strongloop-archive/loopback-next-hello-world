// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

export const helloWorldApi = {
  paths: {
    '/helloworld': {
      get: {
        'x-operation-name': 'helloWorld',
        'x-controller-name': 'HelloWorldController',
        parameters: [
          {
            name: 'name',
            in: 'query',
            description: 'Your name.',
            required: false,
            type: 'string',
            'x-example': 'Ted',
          },
        ],
        responses: {
          '200': {
            description: 'Returns a hello world with your (optional) name.',
            examples: {
              'text/plain': 'Hello world Ted {"username":"a","password":"a"}',
            },
          },
        },
      },
    },
    '/users': {
      get: {
        'x-operation-name': 'getUsers',
        'x-controller-name': 'HelloWorldController',
        parameters: [
          {
            name: 'name',
            in: 'query',
            description: 'The name for the user instance.',
            required: false,
            type: 'string',
            'x-example': 'Ted',
          },
        ],
        responses: {
          '200': {
            description: 'An array of persisted user instances.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/user',
              },
            },
            examples: {
              'application/json': '[{username:"Ted", id: 1}]',
            },
          },
        },
      },
      post: {
        'x-operation-name': 'createUser',
        'x-controller-name': 'HelloWorldController',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'userInfo',
            in: 'body',
            description: 'The user model instance to create.',
            required: false,
            schema: {
              $ref: '#/definitions/user',
            },
          },
        ],
        responses: {
          '200': {
            description: 'The created user instance.',
            schema: {
              $ref: '#/definitions/user',
            },
            examples: {
              'application/json': '{"id": 1,"username": "Ted"}',
            },
          },
        },
      },
    },
  },
};

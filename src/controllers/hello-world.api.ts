// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

export const controllerSpec =
{
  "swagger": "2.0",
  "basePath": "/",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0",
  },
  "paths": {
    "/helloworld": {
      "get": {
        "x-operation-name": "helloWorld",
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "description": "Your name.",
            "required": false,
            "type": "string",
            "x-example": "Ted"
          }
        ],
        "responses": {
          "200": {
            "description": "Returns a hello world with your (optional) name.",
            "examples": {
              "text/plain": "Hello world Ted {\"username\":\"a\",\"password\":\"a\"}"
            }
          }
        }
      }
    }
  }
}

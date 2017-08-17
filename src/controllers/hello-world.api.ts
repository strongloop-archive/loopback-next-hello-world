// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

export const controllerSpec =
{
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

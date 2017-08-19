// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

import {
  CoreBindings,
  FindRoute,
  inject,
  InvokeMethod,
  ParseParams,
  parseOperationArgs,
  ParsedRequest,
  Reject,
  Send,
  ServerResponse,
  SequenceHandler,
} from '@loopback/core';

const CoreSequenceActions = CoreBindings.SequenceActions;

import {
  AuthenticateFn,
  AuthenticationBindings,
} from '@loopback/authentication';

export class MySequence implements SequenceHandler {
  constructor(
    @inject(CoreSequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(CoreSequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(CoreSequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(CoreSequenceActions.SEND) protected send: Send,
    @inject(CoreSequenceActions.REJECT) protected reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
  ) {}

  async handle(req: ParsedRequest, res: ServerResponse) {
    try {
      const route = this.findRoute(req);

      setFakeAuthorizationHeader(req);

      const user = await this.authenticateRequest(req);

      const args = await this.parseParams(req, route);
      const result = await this.invoke(route, args);
      this.send(res, result);
    } catch (err) {
      this.reject(res, req, err);
    }
  }
}

function setFakeAuthorizationHeader(req) {
  var parts = [
    // schema
    'Basic',
    // credentials: a:a
    'YTph',
  ];
  req.headers['authorization'] = parts.join(' ');
  return req;
}

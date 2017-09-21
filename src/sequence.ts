// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
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
const strftime = require('fast-strftime');

const CoreSequenceActions = CoreBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  constructor(
    @inject(CoreSequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(CoreSequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(CoreSequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(CoreSequenceActions.SEND) protected send: Send,
    @inject(CoreSequenceActions.REJECT) protected reject: Reject,
    @inject('sequence.actions.log') protected log: (msg: string) => void,
  ) {}

  async handle(req: ParsedRequest, res: ServerResponse) {
    try {
      const route = this.findRoute(req);
      const args = await this.parseParams(req, route);
      const result = await this.invoke(route, args);
      this.send(res, result);
      this.log([
       req.socket.remoteAddress,
       '-',
       '-',
       `[${strftime('%d/%b/%Y:%H:%M:%S %z', new Date())}]`,
       `"${req.method} ${req.path} HTTP/${req.httpVersion}"`,
       res.statusCode,
       '-',
      ].join(' '));
    } catch (err) {
      this.reject(res, req, err);
    }
  }
}

function setFakeAuthorizationHeader(req: ParsedRequest) {
  var parts = [
    // schema
    'Basic',
    // credentials: a:a
    'YTph',
  ];
  req.headers['authorization'] = parts.join(' ');
}

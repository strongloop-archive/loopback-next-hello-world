import {Application, DefaultSequence, FindRoute, InvokeMethod,
  ParsedRequest, Reject, Send, inject} from '@loopback/core';
import {Logger, LoggerComponent} from '@loopback/logger';
import {HelloWorldController} from './controllers/hello-world';
import * as http from 'http';

const setupLoggerKey = Logger.SequenceActions.SETUP_LOGGER;
const loggerKey = Logger.SIMPLE_LOGGER;

class HttpLoggerSequence extends DefaultSequence {
  @inject(setupLoggerKey)
  private httpLogger: Function;
  constructor(
    @inject('sequence.actions.findRoute') protected findRoute: FindRoute,
    @inject('sequence.actions.invokeMethod') protected invoke: InvokeMethod,
    @inject('sequence.actions.send') public send: Send,
    @inject('sequence.actions.reject') public reject: Reject,
  ) {
    super(findRoute, invoke, send, reject);
  }

  async handle(req: ParsedRequest, res: http.ServerResponse) {
    this.httpLogger(req, res);
    await super.handle(req, res);
  }
}

const app = new Application({
  components: [LoggerComponent],
  sequence: HttpLoggerSequence,
});
app.controller(HelloWorldController);
const logger = app.getSync(loggerKey);
// setInterval(() => logger.info('It\'s ' + new Date().toString()), 2000);

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) {
    logger.error(err);
    throw err;
  }
  logger.log(`*** HTTP server started on port ${3000}`);
  console.log(`HTTP server listening on port ${3000}`);
  console.log('Run `curl localhost:3000/helloworld?name=YOUR_NAME` to try it out');
});

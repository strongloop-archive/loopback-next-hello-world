import {Application} from '@loopback/core';
import {AuthenticationComponent, BindingKeys} from '@loopback/authentication';
import {MyAuthStrategyProvider} from './providers/auth-strategy';
import {HelloWorldController} from './controllers/hello-world';
import {MySequence} from './sequence';
import * as http from 'http';

const app = new Application({
  components: [AuthenticationComponent],
 });
app.bind(BindingKeys.Authentication.STRATEGY)
  .toProvider(MyAuthStrategyProvider);
app.sequence(MySequence);
app.controller(HelloWorldController);

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`HTTP server listening on port ${3000}`);
  console.log('Run `curl localhost:3000/helloworld?name=YOUR_NAME` to try it out');
});

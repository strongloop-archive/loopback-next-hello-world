import {Application} from '@loopback/core';
import {HelloWorldController} from './controllers/hello-world';
import * as http from 'http';

const app = new Application();
app.controller(HelloWorldController);

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`HTTP server listening on port ${3000}`);
  console.log('Run `curl localhost:3000/helloworld?name=YOUR_NAME` to try it out');
});

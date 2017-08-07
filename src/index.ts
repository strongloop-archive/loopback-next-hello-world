import {createApp} from './application';
import * as http from 'http';

const app = createApp();

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`HTTP server listening on port ${3000}`);
  console.log('Run `curl localhost:3000/helloworld?name=YOUR_NAME` to try it out');
});

import {createApp} from './application';
import {HelloWorldController} from './components/hello-world/controllers/hello-world';
import * as http from 'http';

const app = createApp();
app.controller(HelloWorldController);

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`HTTP server listening on port ${3000}`);
});

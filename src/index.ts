
import {createApp} from './application';
import * as http from 'http';
import * as https from 'https';
//import {handleHttp, handleHttps} from '@loopback/handlers';

const app = createApp();

import {HelloWorldController} from './components/controllers/hello-world';
app.controller(HelloWorldController);

function createHttpHandler(app) {
  return (req, res) => {
    app.handleHttp(req, res)
  }
}
http.createServer(createHttpHandler(app)).listen(8080)

//http.createServer(handleHttp(app, {httpsRedirect: true})).listen(80);
//https.createServer(handleHttps(app)).listen(443);
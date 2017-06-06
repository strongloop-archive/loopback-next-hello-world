import {createApp} from './application';
// import {http} from 'http';
// import {https} from 'https';
//import {handleHttp, handleHttps} from '@loopback/handlers';

const app = createApp();

import {HelloWorldController} from './components/controllers/hello-world';
app.controller(HelloWorldController);

//http.createServer(handleHttp(app, {httpsRedirect: true})).listen(80);
//https.createServer(handleHttps(app)).listen(443);
import {Application} from '@loopback/core';
import {HelloWorldController} from './controllers/hello-world';

export function createApp(): Application {
  const app = new Application();
  app.controller(HelloWorldController);
  return app;
}


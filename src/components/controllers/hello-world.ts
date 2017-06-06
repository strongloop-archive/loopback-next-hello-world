import { api } from '@loopback/core';
import { def } from './hello-world.api';

@api(def)
export class HelloWorldController {
    helloWorld(name: string) {
        return `Hello world ${name}!`
    }
}
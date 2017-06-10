import {Application} from '@loopback/core';
import {HelloWorldComponent} from './components/hello-world';

export function createApp(): Application {
    return new Application({
        components: [HelloWorldComponent],
    });
}


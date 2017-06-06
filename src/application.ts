import {Application, Sequence} from '@loopback/core';
import {HelloWorldComponent} from './components';

export function createApp(): Application {
    return new Application({
        components: [HelloWorldComponent],
        sequences: []
    })
}


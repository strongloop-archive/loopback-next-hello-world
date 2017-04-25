# loopback-next-quick-start

Quick start tutorial for LoopBack.next.

## Installation

```
https://github.com/strongloop/loopback-next-quick-start.git
```

## Basic use

```
npm start
```

## Project layout

```
.
├── index.ts              # The application entry point
├── package.json          # Contains a list of components
├── datasources.ts        # A list of external systems available to the app
├── todo                  # An example component
    ├── TodoController.ts # A class implementing all todo end points
    ├── TodoModel.ts      # The properties and validations of a single todo
    ├── TodoRepository.ts # A collection of todos in a database table
    ├── bindings.ts       # A list of bindings for the component
    ├── index.ts          # The component entry point
    └── test              # Container for component tests
         └── todo.test.ts # An example component test
```

### The application entry point

```
import {Application} from '@loopback/loopback'

const app = new Application();
```


```
import {Application} from '@loopback/loopback';
import {Authentication} from '@loopback/authentication';

const app = new Application();
app.component(Authentication);
```

How do I write/add my own component?

```
All the things you need to know.
```

If you want to know more, see how to write ex dev wiki.

# loopback-next-hello-world

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback) [![Build Status](https://travis-ci.org/strongloop/loopback-next-quick-start.svg?branch=master)](https://travis-ci.org/strongloop/loopback-next-quick-start) [TODO Code coverage - coveralls]

## Table of Contents
* [Overview](#overview)
* [Background](#background)
* [Setup](#setup)
* [Testing](#testing)
* [Project Structure](#structure)
* [Writing Controllers](#controllers)
* [Using a Custom Sequence](#sequence)
* [TypeScript Configuration](#typescriptConfiguration)
* [Dependencies](#dependencies)
* [Other Resources](#resources)
* [Contribute](#contribute)

## <a name="overview"></a>Overview

#### Welcome to the hello-world example for Loopback.next!
Loopback makes it easy to build modern applications that require complex integrations. 

Loopback.next, the next version of LoopBack, is being designed to make it even easier to extend the framework for your own needs. Loopback.next will also include the latest JavaScript features.

The goal of this tutorial is to show you what a basic, 'hello-world' Loopback.next app looks like and how it works.

This example will show you how to: 

* create a Loopback.next server
* make a request to the server to fetch content

This example will explain:

* the structure of a Loopback.next application
* how to add a custom component (TODO)
* how to add a custom sequence

When you have this example installed and running, you will be able to make a request to the server with a name and get back a HTTP 200 response: 

![screenshot](https://github.com/strongloop/loopback-next-hello-world/blob/master/hello-world-screenshot.png?raw=true)

## <a name="background"></a>Background

For in-depth information about the concepts underlying Loopback.next, check out these wiki pages:

* [Crafting LoopBack Next](https://github.com/strongloop/loopback-next/wiki/Crafting-LoopBack-Next)
* [Thinking in LoopBack](https://github.com/strongloop/loopback-next/wiki/Thinking-in-LoopBack)

## <a name="setup"></a>Setup 

1. Install `node`:

	You should have Node.js version 8.x or newer installed.
	
	_NOTE_: Want to switch Node versions quickly and easily? Try [`nvm`](https://github.com/creationix/nvm/blob/master/README.md). 
		
	For the latest information on project dependencies for LoopBack, please check this link: 
[https://github.com/strongloop/loopback-next/wiki/Installation](https://github.com/strongloop/loopback-next/wiki/Installation).

2. Clone this repo: 
	
	`git clone https://github.com/strongloop/loopback-next-hello-world.git`

3. Switch to your new directory: 
	
	`cd loopback-next-hello-world`

4. Install your dependencies: 

	`npm install`

5. Start the application! 
	
	`npm start`

> Note: `npm start` automatically builds the project via the `prestart` npm script in `package.json`. If you would like to build this project separately, use `npm run build`.


## <a name="testing"></a>Testing

To test this application use `npm test`.

## <a name="structure"></a>Project structure

A TypeScript project will have separate `src` and `lib` directories, for source and distributable files. TypeScript (.ts) files from your `src` folder are compiled into JavaScript (.js) files and output in the `lib` folder.  

| Name | Description|
|------|------------|
|.github/ISSUE_TEMPLATE.md|use this template to report an issue |
|.github/PULL\_REQUEST\_TEMPLATE.MD|use this template to help you open a pull request |
|lib/|this directory is created when you build your project and contains the distributable code built by TypeScript. This is the code you deploy.|
|node_modules|this directory contains your npm modules|
|src/|this directory contains your source code. TypeScript compiles this code and outputs it to the `lib/` directory.|
|src/controllers|This folder contains controllers, which implement the operations defined in your OpenAPI spec file|
|src/controllers/hello-world.api.ts|the OpenAPI spec file|
|src/controllers/hello-world.ts|this controller implements the helloWorld operation|
|src/providers/|providers implement the functionalities defined by components|
|src/providers/auth-strategy.ts|this file contains the authentication strategy that is bound to the [Authentication component](https://github.com/strongloop/loopback-next/tree/master/packages/authentication)|
|src/application.ts|this file defines your application (components + sequence)|
|src/index.ts|this is the entry point of your application|
|src/sequence.ts|this file contains your custom sequence|
|test/|this directory contains your tests|
|package.json	|this documents this project's dependencies and their versions, and also includes important repository, author, and license information|
|README.md|this is the file you're reading right now!|
|tsconfig.json|the configuration settings for TypeScript compilation|

#### <a name="controllers"></a>Controllers

Controllers implement the operations defined in your OpenAPI spec file. Find a guide to writing and testing controllers in LoopBack.next [here](https://github.com/strongloop/loopback-next/wiki/Thinking-in-LoopBack#implement-your-business-logic).

#### <a name="sequence"></a>Adding a Custom Sequence

A [sequence](https://github.com/strongloop/loopback-next/wiki/Sequence) is a stateless grouping of actions that allow you to control how your application responds to requests. All LoopBack.next applications have a default sequence with actions that find the route, parse the parameters, invoke the route (that is, runs the associated controller), await the result of that route, send the response, and catch any errors.

You can create custom sequences that can inject new logic or behaviors at any point, accepting the output of any action and passing data on to the next action. Sequences must provide a response to a request, and they are registered when you define your application (in your `application.ts` file).

````
import {MySequence} from './sequence';
````


### <a name="typescriptConfiguration"></a>TypeScript Configuration

In your `tsconfig.json` file, you can specify options for TypeScript to use when compiling your project. 

Here is the `tsconfig.json` for this project: 

```json{
  "compilerOptions": {                     
    "module": "commonjs",
    "target": "es2017",
    "outDir": "./lib",
    "experimentalDecorators": true,
    "baseUrl": "./src"    
  },
  "exclude": [
    "node_modules/**"
  ]
}
```
| compilerOption | Description |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `"module": "commonjs"`             | The **output** module type (in your `.js` files). Node uses commonjs, so that is what we use          |
| `"target": "es2017"`                  | The output language level                               |
| `"outDir": "./lib"`                 | Location to output `.js` files                                                        |
| `"baseUrl": "./src"`                   |  |
| `experimentalDecorators`                     | enables support for decorators (more information: [https://www.typescriptlang.org/docs/handbook/decorators.html](https://www.typescriptlang.org/docs/handbook/decorators.html))|

_NOTE_: We recommend you use [VSCode](https://code.visualstudio.com/) for this hello-world example because it has built-in TypeScript support, but you can use any editor. For more information about using TypeScript with your editor of choice, check out [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

[TODO add a Need more help? link]

## <a name="dependencies"></a>Dependencies

[TODO]

## <a name="resources"></a>Other Resources
* Current [Loopback documentation](http://loopback.io)
* [Loopback.next repo](https://github.com/strongloop/loopback-next)
* Check out the [Strongloop blog](https://strongloop.com/strongblog/tag_LoopBack.html) for more posts about Loopback
* To keep up-to-date with Loopback announcements, sign up for the Strongloop newsletter [here](https://strongloop.com/newsletter/).

## <a name="contribute"></a>Contribute to Loopback
* [Guidelines](https://github.com/strongloop/loopback-next/wiki/Contributing#guidelines)
* [Join the team](https://github.com/strongloop/loopback-next/issues/110)
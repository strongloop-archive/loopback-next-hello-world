# loopback-next-ts-starter

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback) [![Build Status](https://travis-ci.org/strongloop/loopback-next-quick-start.svg?branch=master)](https://travis-ci.org/strongloop/loopback-next-quick-start) [TODO Code coverage - coveralls]

Welcome to the quick start tutorial for LoopBack.next + TypeScript!
LoopBack makes it easy to build modern applications that require complex integrations. LoopBack.next is the next version of LoopBack and is being designed to make it even easier to extend the framework for your own needs and will enable the latest ES features.

Goal of tutorial
Show you what a LoopBack.next app looks like and how the basics works

what we're trying to do
start a server to serve content
make a request to the server to fetch content

how we do it
create a server
add a custom component
add a custom sequence

What we'll do to the app:
- Make a request to the server with a name and get back a HTTP 200 response

## Setup

[CLEANUP]
Before you clone ... 
### Install `node`, `npm`, and `TypeScript` 
You should have `node` (>= 7.6.0), `npm` (>= 3.10), and `TypeScript`  (>= 2.0.0) installed. For the latest information on project dependencies for LoopBack, please check this link: 
https://github.com/strongloop/loopback-next/wiki/Installation

```
git clone https://github.com/strongloop/loopback-next-ts-starter.git
npm install -S @loopback/core
npm start
curl localhost:3000/helloworld?name=Joe
# you should see "Hello world Joe!"
```

> Note: `npm start` automatically builds the project via the `prestart` NPM script in package.json

## Useful app commands

- Clone this project: `git clone https://github.com/strongloop/loopback-next-ts-starter.git`
- Building this project: `npm run build`
- Running the application: `npm start`
- Test your application: `npm test`

## Project structure

A TypeScript project will have separate `src` and `dist` directories, for source and distributable files. TypeScript (.ts) files from your `src` folder are compiled into JavaScript (.js) files and output in the `dist` folder.  

| Name | Description|
|------|------------|
|README.md|this file you're reading right now!|
|dist|this directory contains the distributable code built by TypeScript. This is the code you deploy.|
|node_modules|this directory contains your npm modules|
|package.json	|------------|
|src|this directory contains your source code. TypeScript compiles this code and outputs it to the `dist/` directory.|
|src/application.ts|------------|
|src/components|------------|
|src/components/controllers|------------|
|src/components/controllers/hello-world.api.ts|the Open API Spec file|
|src/components/controllers/hello-world.ts|------------|
|src/components/index.ts|------------|
|src/index.ts|------------|
|test/|this directory contains your tests|
|tsconfig.json|the configuration settings for TypeScript compilation|

### TypeScript Configuration

[TODO]
In your `tsconfig.json` file, you can specify options for TypeScript to use when compiling your project. 

Here is the `tsconfig.json` for this project: 

```json{
  "compilerOptions": {                     
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist",
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
| `"target": "es6"`                  | The output language level                               |
| `"outDir": "./dist"`                 | Location to output `.js` files                                                        |
| `"baseUrl": "./src"`                   |  |
| `experimentalDecorators`                     | enables support for decorators (more information: https://www.typescriptlang.org/docs/handbook/decorators.html)|

## If you want to try coding up this example yourself [CLEANUP]

We recommend you use [VSCode](https://code.visualstudio.com/) for this quick start because it has built-in TypeScript support, but you can use any editor. For more information about using TypeScript with your editor of choice, check out https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support.

[TODO add a Need more help? link]

## Dependencies

[TODO]

#Other questions:

* do we add a top-level license file?
* acknowledgments?
* CTA for next steps, sign up for Loopback mailing list?

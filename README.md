# loopback-next-ts-starter

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback) [![Build Status](https://travis-ci.org/strongloop/loopback-next-quick-start.svg?branch=master)](https://travis-ci.org/strongloop/loopback-next-quick-start) [TODO Code coverage - coveralls]

Quick start tutorial for LoopBack.next + TypeScript.

## Installation

Prerequisite

- See https://github.com/strongloop/loopback-next/wiki/Installation

```
git clone https://github.com/strongloop/loopback-next-ts-starter.git
```

## Basic use

```
npm start
```

## Project layout

WIP

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

// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var hooks = require('hooks');

// hooks.beforeAll(function (transactions, done) {
//   hooks.log(JSON.stringify(transactions, 0, 2));
//   done();
// });

// hooks.beforeEach(function (transaction, done) {
//   hooks.log(JSON.stringify(transaction, 0, 2));
//   done();
// });

hooks.before("/helloworld > GET > 200 > text/plain", function (transaction, done) {
  hooks.log(JSON.stringify(transaction, 0, 2));
  done();
});

// hooks.beforeEachValidation(function (transaction, done) {
//   hooks.log(JSON.stringify(transaction, 0, 2));
//   done();
// });

hooks.beforeValidation("/helloworld > GET > 200 > text/plain", function (transaction, done) {
  hooks.log(JSON.stringify(transaction, 0, 2));
  done();
});

hooks.after("/helloworld > GET > 200 > text/plain", function (transaction, done) {
  hooks.log(JSON.stringify(transaction, 0, 2));
  done();
});

// hooks.afterEach(function (transaction, done) {
//   hooks.log(JSON.stringify(transaction, 0, 2));
//   done();
// });

// hooks.afterAll(function (transactions, done) {
//   hooks.log(JSON.stringify(transactions, 0, 2));
//   done();
// });

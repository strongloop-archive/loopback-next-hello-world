// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {juggler, DataSourceConstructor} from '@loopback/repository';

export const db = new DataSourceConstructor({
  connector: 'memory',
});

import {juggler, DataSourceConstructor} from '@loopback/repository';

export const db = new DataSourceConstructor({
  name: 'db',
  connector: 'memory',
});

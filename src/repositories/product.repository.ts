// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DefaultCrudRepository, DataSourceType} from '@loopback/repository';
import {Product} from '../models/product.model';
import {db} from '../datasources/db.datasource';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor() {
    super(Product, db);
  }
}

// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ProductRepository, Product} from '../..';

export async function givenEmptyDatabase() {
  await new ProductRepository().deleteAll();
}

export async function givenProduct(data: Partial<Product>) {
  return await new ProductRepository().create(data);
}

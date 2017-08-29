// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject} from '@loopback/context';
import {EntityCrudRepository} from '@loopback/repository';
import {ProductRepository} from '../repositories/product.repository';
import {Product} from '../models/product.model';

export class ProductController {
  constructor(
    @inject('repositories.Product')
    public repository: ProductRepository
  ) {}


  async getDetails(slug: string): Promise<Product> {
    const found = await this.repository.find({where: {slug}});
    // TODO: handle "not found" case
    return found[0];
  }
}

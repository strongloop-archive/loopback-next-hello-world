// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    description: 'The unique identifier for a product',
    type: 'number',
    id: true,
  })
  id: number;

  @property({type: 'string'})
  name: string;

  @property({type: 'string'})
  slug: string;

  @property({type: 'boolean'})
  available: boolean;

  @property({type: 'string'})
  category: string;

  @property({type: 'string'})
  description: string;

  @property({type: 'string'})
  label: string;

  @property({type: 'number'})
  price: number;

  @property({type: 'date'})
  endDate: Date;
}

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

  @property({type: 'string', required: true})
  name: string;

  @property({type: 'string', required: true})
  slug: string;

  @property({type: 'number', required: true})
  price: number;

  @property({type: 'string', required: true})
  description: string;

  @property({type: 'boolean', required: true})
  available: boolean;

  @property({type: 'string'})
  category: string;

  @property({type: 'string'})
  label: string;

  @property({type: 'date'})
  endDate: Date;
}

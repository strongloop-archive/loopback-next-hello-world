// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {HelloWorldApp} from '../..';
import {CoreBindings} from '@loopback/core';
import {expect, supertest, Client} from '@loopback/testlab';
import {givenEmptyDatabase, givenProduct} from '../helpers/database.helpers';

describe('Product (acceptance)', () => {
  let app: HelloWorldApp;
  let request: Client;

  before(givenEmptyDatabase);
  before(givenRunningApp);

  it('retrieves product details', async () => {
    // arrange
    const product = await givenProduct({
      name: 'Ink Pen',
      slug: 'ink-pen',
      price: 1,
      category: 'Stationery',
      description: 'The ultimate ink-powered pen for daily writing',
      label: 'popular',
      available: true,
      endDate: undefined,
    });

    // act
    const response = await request.get('/product/ink-pen').expect(200);

    // assert
    expect(response.body).to.deepEqual({
      id: product.id,
      name: 'Ink Pen',
      slug: 'ink-pen',
      price: 1,
      category: 'Stationery',
      available: true,
      description: 'The ultimate ink-powered pen for daily writing',
      label: 'popular',
      endDate: undefined,
    });
  });

  async function givenRunningApp() {
    app = new HelloWorldApp();

    app.bind(CoreBindings.HTTP_PORT).to(0);
    await app.start();

    const port: number = await app.get(CoreBindings.HTTP_PORT);
    request = supertest(`http://127.0.0.1:${port}`);
  }
});

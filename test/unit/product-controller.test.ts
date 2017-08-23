// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ProductController} from '../..';
import {expect} from '@loopback/testlab';

describe('ProductController', () => {
  describe('getDetails()', () => {
    it('retrieves details of a product', async () => {
      const controller = new ProductController();
      const details = await controller.getDetails('ink-pen');
      expect(details).to.containDeep({
        name: 'Ink Pen',
        slug: 'ink-pen',
      });
    });
  });
});

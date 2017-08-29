// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/loopback-next-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ProductController, ProductRepository} from '../..';
import {expect, sinon} from '@loopback/testlab';

describe('ProductController', () => {
  let repository: ProductRepository;
  beforeEach(givenStubbedRepository);

  describe('getDetails()', () => {
    it('retrieves details of a product', async () => {
      const controller = new ProductController(repository);
      const findStub = repository.find as sinon.SinonStub;
      findStub.resolves([
        {
          id: 1,
          name: 'Ink Pen',
          slug: 'ink-pen',
        },
      ]);

      const details = await controller.getDetails('ink-pen');

      expect(details).to.containDeep({
        name: 'Ink Pen',
        slug: 'ink-pen',
      });
      expect(findStub).to.be.calledWithMatch({where: {slug: 'ink-pen'}});
    });
  });

  function givenStubbedRepository() {
    repository = sinon.createStubInstance(ProductRepository);
  }
});

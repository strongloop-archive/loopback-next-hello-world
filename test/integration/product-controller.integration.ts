import {ProductController, ProductRepository, Product} from '../..';
import {expect} from '@loopback/testlab';
import {givenEmptyDatabase, givenProduct} from '../helpers/database.helpers';

describe('ProductController (integration)', () => {
  beforeEach(givenEmptyDatabase);

  describe('getDetails()', () => {
    it('retrieves details of the given product', async () => {
      const inkPen = await givenProduct({
        name: 'Ink Pen',
        slug: 'ink-pen',
      });

      const pencil = await givenProduct({
        name: 'Pencil',
        slug: 'pencil',
      });

      const controller = new ProductController(new ProductRepository());

      const details = await controller.getDetails('pencil');

      expect(details).to.eql(pencil);
    });
  });
});

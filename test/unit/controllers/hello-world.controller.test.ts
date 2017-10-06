import {HelloWorldController} from '../../../src/controllers/hello-world';
import {UserProfile} from '@loopback/authentication';
import {expect, sinon} from '@loopback/testlab';
import {
  DefaultCrudRepository,
  DataSourceConstructor,
} from '@loopback/repository';
import {UserRepository} from '../../../src/repositories/user.repository';

describe('HelloWorldController', () => {
  let repository: UserRepository;
  let controller: HelloWorldController;
  let testUserProfile: UserProfile = {
    id: '1',
    name: 'foo',
    email: 'foo@bar.com',
  };

  beforeEach(givenController);

  context('helloWorld()', () => {
    it('returns Hello World message for a given user', async () => {
      const res = await controller.helloWorld('Adam');
      expect(res).to.equal(
        'Hello world Adam ' + JSON.stringify(testUserProfile),
      );
    });

    it('returns undefined when user not specified', async () => {
      const res = await controller.helloWorld();
      expect(res).to.equal(
        'Hello world undefined ' + JSON.stringify(testUserProfile),
      );
    });
  });

  context('getUsers()', () => {
    it('calls find with empty where filter', async () => {
      let stub = repository.find as sinon.SinonStub;
      const res = await controller.getUsers();
      should(stub).be.calledWithMatch({});
    });
    it('calls find with non empty where filter', async () => {
      let stub = repository.find as sinon.SinonStub;
      const res = await controller.getUsers('Joe');
      should(stub).be.calledWithMatch({where: {username: 'Joe'}});
    });
  });

  context('createUser()', () => {
    it('calls create with supplied user instance', async () => {
      let stub = repository.create as sinon.SinonStub;
      const res = await controller.createUser({username: 'Jane'});
      should(stub).be.calledWithMatch({username: 'Jane'});
    });
  });

  function givenController() {
    repository = givenStubbedRepository();
    controller = new HelloWorldController(testUserProfile, repository);
  }

  function givenStubbedRepository() {
    return sinon.createStubInstance(UserRepository);
  }
});

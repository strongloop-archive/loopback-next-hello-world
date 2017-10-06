import {HelloWorldApp} from '../..';
import {CoreBindings} from '@loopback/core';
import {expect, supertest} from '@loopback/testlab';
import {UserRepository} from '../../src/repositories/user.repository';
import {User} from '../../src/models/user.model';
import {RestServer, RestBindings} from '@loopback/rest';

describe('User (acceptance)', () => {
  let app: HelloWorldApp;
  let repository: UserRepository;
  let request: supertest.SuperTest<supertest.Test>;
  let restServer: RestServer;

  before(givenRunningApp);
  beforeEach(givenEmptyDatabase);

  it('retrieves user details', async () => {
    // arrange
    const user = await givenUser({
      username: 'John',
    });
    // act
    const response = await request.get('/users');
    // assert
    expect(response.body[0].username).to.equal('John');
  });

  it('posts a user instance', async () => {
    const response = await request.post('/users').send({username: 'Jane'});
    const foundUser: User[] = await findByName('Jane');
    expect(foundUser[0].username).to.equal('Jane');
  });

  async function givenEmptyDatabase() {
    await repository.deleteAll();
  }

  async function givenRunningApp() {
    app = new HelloWorldApp();
    repository = await app.get('repositories.UserRepository');
    restServer = await app.getServer(RestServer);

    restServer.bind(RestBindings.PORT).to(0);
    await app.start();

    const port: number = await restServer.get(RestBindings.PORT);
    request = supertest(`http://127.0.0.1:${port}`);
  }

  async function givenUser(data: Partial<User>) {
    return await repository.create(data);
  }

  async function findByName(name: string) {
    return await repository.find({where: {username: name}});
  }
});

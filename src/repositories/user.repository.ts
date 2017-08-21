import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models/user.model';
import {db} from '../datasources/db.datasource';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor() {
    super(User, db);
  }
}

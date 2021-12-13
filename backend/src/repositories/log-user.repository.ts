import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class LogUserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.idUser,
  UserRelations
> {
  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource,
  ) {
    super(User, dataSource);
  }
}

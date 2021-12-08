import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {User, UserRelations, Coin} from '../models';
import {CoinRepository} from './coin.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.idUser,
  UserRelations
> {

  public readonly coins: HasManyRepositoryFactory<Coin, typeof User.prototype.idUser>;

  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource, @repository.getter('CoinRepository') protected coinRepositoryGetter: Getter<CoinRepository>,
  ) {
    super(User, dataSource);
    this.coins = this.createHasManyRepositoryFactoryFor('coins', coinRepositoryGetter,);
    this.registerInclusionResolver('coins', this.coins.inclusionResolver);
  }
}

import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {Coin, CoinRelations, Exchange} from '../models';
import {ExchangeRepository} from './exchange.repository';

export class CoinRepository extends DefaultCrudRepository<
  Coin,
  typeof Coin.prototype.idCoin,
  CoinRelations
> {

  public readonly exchanges: HasManyRepositoryFactory<Exchange, typeof Coin.prototype.idCoin>;

  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource, @repository.getter('ExchangeRepository') protected exchangeRepositoryGetter: Getter<ExchangeRepository>,
  ) {
    super(Coin, dataSource);
    this.exchanges = this.createHasManyRepositoryFactoryFor('exchanges', exchangeRepositoryGetter,);
    this.registerInclusionResolver('exchanges', this.exchanges.inclusionResolver);
  }
}

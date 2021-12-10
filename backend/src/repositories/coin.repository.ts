import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {Coin, CoinRelations} from '../models';

export class CoinRepository extends DefaultCrudRepository<
  Coin,
  typeof Coin.prototype.idCoin,
  CoinRelations
> {
  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource,
  ) {
    super(Coin, dataSource);
  }
}

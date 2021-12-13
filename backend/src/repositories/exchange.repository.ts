import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {Exchange, ExchangeRelations} from '../models';

export class ExchangeRepository extends DefaultCrudRepository<
  Exchange,
  typeof Exchange.prototype.idExchange,
  ExchangeRelations
> {
  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource,
  ) {
    super(Exchange, dataSource);
  }
}

import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {Coin, CoinRelations, Quotation} from '../models';
import {QuotationRepository} from './quotation.repository';

export class CoinRepository extends DefaultCrudRepository<
  Coin,
  typeof Coin.prototype.idCoin,
  CoinRelations
> {

  public readonly quotations: HasManyRepositoryFactory<Quotation, typeof Coin.prototype.idCoin>;

  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource, @repository.getter('QuotationRepository') protected quotationRepositoryGetter: Getter<QuotationRepository>,
  ) {
    super(Coin, dataSource);
    this.quotations = this.createHasManyRepositoryFactoryFor('quotations', quotationRepositoryGetter,);
    this.registerInclusionResolver('quotations', this.quotations.inclusionResolver);
  }
}

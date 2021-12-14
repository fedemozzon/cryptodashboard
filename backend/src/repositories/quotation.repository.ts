import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoConnectionDataSource} from '../datasources';
import {Quotation, QuotationRelations} from '../models';

export class QuotationRepository extends DefaultCrudRepository<
  Quotation,
  typeof Quotation.prototype.idQuotation,
  QuotationRelations
> {
  constructor(
    @inject('datasources.mongoConnection') dataSource: MongoConnectionDataSource,
  ) {
    super(Quotation, dataSource);
  }
}

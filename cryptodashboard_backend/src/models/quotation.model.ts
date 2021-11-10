import {Entity, model, property} from '@loopback/repository';

@model()
export class Quotation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idQuotation?: number;

  @property({
    type: 'number',
    required: true,
  })
  priceQuotation: number;

  @property({
    type: 'string',
    required: true,
  })
  exchangeQuotation: string;


  constructor(data?: Partial<Quotation>) {
    super(data);
  }
}

export interface QuotationRelations {
  // describe navigational properties here
}

export type QuotationWithRelations = Quotation & QuotationRelations;

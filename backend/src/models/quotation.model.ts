import {Entity, model, property} from '@loopback/repository';

@model()
export class Quotation extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idQuotation?: string;

  @property({
    type: 'string',
    required: true,
  })
  dateCreation: string;

  @property({
    type: 'boolean',
    required: true,
  })
  result: boolean;

  @property({
    type: 'string',
  })
  coinId?: string;
  @property({
    type: 'string',
  })
  exchangeName?: string;

  constructor(data?: Partial<Quotation>) {
    super(data);
  }
}

export interface QuotationRelations {
  // describe navigational properties here
}

export type QuotationWithRelations = Quotation & QuotationRelations;

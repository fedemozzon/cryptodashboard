import {Entity, model, property} from '@loopback/repository';

@model()
export class Quotation extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idQuotation?: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<Quotation>) {
    super(data);
  }
}

export interface QuotationRelations {
  // describe navigational properties here
}

export type QuotationWithRelations = Quotation & QuotationRelations;

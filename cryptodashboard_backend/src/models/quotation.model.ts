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
  valueQuotation: number;

  @property({
    type: 'date',
    required: true,
  })
  dateCreationQuotation: string;

  @property({
    type: 'string',
  })
  coinId?: string;

  constructor(data?: Partial<Quotation>) {
    super(data);
  }
}

export interface QuotationRelations {
  // describe navigational properties here
}

export type QuotationWithRelations = Quotation & QuotationRelations;

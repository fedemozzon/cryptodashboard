import {Entity, model, property, hasMany} from '@loopback/repository';
import {Quotation} from './quotation.model';

@model()
export class Coin extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCoin?: string;

  @property({
    type: 'string',
    required: true,
  })
  nameCoin: string;

  @property({
    type: 'string',
    required: true,
  })
  acronym: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  linkToWikipedia: string;

  @hasMany(() => Quotation)
  quotations: Quotation[];

  @property({
    type: 'string',
  })
  userId?: string;

  constructor(data?: Partial<Coin>) {
    super(data);
  }
}

export interface CoinRelations {
  // describe navigational properties here
}

export type CoinWithRelations = Coin & CoinRelations;

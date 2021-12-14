import {Entity, model, property, hasMany} from '@loopback/repository';
import {Exchange} from './exchange.model';
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
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  acronym: string;

  @property({
    type: 'string',
    required: true,
  })
  linkToWikipedia: string;

  @hasMany(() => Exchange)
  exchanges: Exchange[];

  @hasMany(() => Quotation)
  quotations: Quotation[];

  constructor(data?: Partial<Coin>) {
    super(data);
  }
}

export interface CoinRelations {
  // describe navigational properties here
}

export type CoinWithRelations = Coin & CoinRelations;

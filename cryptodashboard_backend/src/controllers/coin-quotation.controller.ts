import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Coin,
  Quotation,
} from '../models';
import {CoinRepository} from '../repositories';

export class CoinQuotationController {
  constructor(
    @repository(CoinRepository) protected coinRepository: CoinRepository,
  ) { }

  @get('/coins/{id}/quotations', {
    responses: {
      '200': {
        description: 'Array of Coin has many Quotation',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Quotation)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Quotation>,
  ): Promise<Quotation[]> {
    return this.coinRepository.quotations(id).find(filter);
  }

  @post('/coins/{id}/quotations', {
    responses: {
      '200': {
        description: 'Coin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Quotation)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Coin.prototype.idCoin,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quotation, {
            title: 'NewQuotationInCoin',
            exclude: ['idQuotation'],
            optional: ['coinId']
          }),
        },
      },
    }) quotation: Omit<Quotation, 'idQuotation'>,
  ): Promise<Quotation> {
    return this.coinRepository.quotations(id).create(quotation);
  }

  @patch('/coins/{id}/quotations', {
    responses: {
      '200': {
        description: 'Coin.Quotation PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quotation, {partial: true}),
        },
      },
    })
    quotation: Partial<Quotation>,
    @param.query.object('where', getWhereSchemaFor(Quotation)) where?: Where<Quotation>,
  ): Promise<Count> {
    return this.coinRepository.quotations(id).patch(quotation, where);
  }

  @del('/coins/{id}/quotations', {
    responses: {
      '200': {
        description: 'Coin.Quotation DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Quotation)) where?: Where<Quotation>,
  ): Promise<Count> {
    return this.coinRepository.quotations(id).delete(where);
  }
}

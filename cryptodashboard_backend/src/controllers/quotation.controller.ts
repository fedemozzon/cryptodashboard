import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Quotation} from '../models';
import {QuotationRepository} from '../repositories';

export class QuotationController {
  constructor(
    @repository(QuotationRepository)
    public quotationRepository : QuotationRepository,
  ) {}

  @post('/quotations')
  @response(200, {
    description: 'Quotation model instance',
    content: {'application/json': {schema: getModelSchemaRef(Quotation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quotation, {
            title: 'NewQuotation',
            exclude: ['idQuotation'],
          }),
        },
      },
    })
    quotation: Omit<Quotation, 'idQuotation'>,
  ): Promise<Quotation> {
    return this.quotationRepository.create(quotation);
  }

  @get('/quotations/count')
  @response(200, {
    description: 'Quotation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Quotation) where?: Where<Quotation>,
  ): Promise<Count> {
    return this.quotationRepository.count(where);
  }

  @get('/quotations')
  @response(200, {
    description: 'Array of Quotation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Quotation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Quotation) filter?: Filter<Quotation>,
  ): Promise<Quotation[]> {
    return this.quotationRepository.find(filter);
  }

  @patch('/quotations')
  @response(200, {
    description: 'Quotation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quotation, {partial: true}),
        },
      },
    })
    quotation: Quotation,
    @param.where(Quotation) where?: Where<Quotation>,
  ): Promise<Count> {
    return this.quotationRepository.updateAll(quotation, where);
  }

  @get('/quotations/{id}')
  @response(200, {
    description: 'Quotation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Quotation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Quotation, {exclude: 'where'}) filter?: FilterExcludingWhere<Quotation>
  ): Promise<Quotation> {
    return this.quotationRepository.findById(id, filter);
  }

  @patch('/quotations/{id}')
  @response(204, {
    description: 'Quotation PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quotation, {partial: true}),
        },
      },
    })
    quotation: Quotation,
  ): Promise<void> {
    await this.quotationRepository.updateById(id, quotation);
  }

  @put('/quotations/{id}')
  @response(204, {
    description: 'Quotation PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() quotation: Quotation,
  ): Promise<void> {
    await this.quotationRepository.replaceById(id, quotation);
  }

  @del('/quotations/{id}')
  @response(204, {
    description: 'Quotation DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quotationRepository.deleteById(id);
  }
}

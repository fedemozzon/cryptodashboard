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
  User,
  Coin,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCoinController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/coins', {
    responses: {
      '200': {
        description: 'Array of User has many Coin',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Coin)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Coin>,
  ): Promise<Coin[]> {
    return this.userRepository.coins(id).find(filter);
  }

  @post('/users/{id}/coins', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Coin)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.idUser,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coin, {
            title: 'NewCoinInUser',
            exclude: ['idCoin'],
            optional: ['userId']
          }),
        },
      },
    }) coin: Omit<Coin, 'idCoin'>,
  ): Promise<Coin> {
    return this.userRepository.coins(id).create(coin);
  }

  @patch('/users/{id}/coins', {
    responses: {
      '200': {
        description: 'User.Coin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coin, {partial: true}),
        },
      },
    })
    coin: Partial<Coin>,
    @param.query.object('where', getWhereSchemaFor(Coin)) where?: Where<Coin>,
  ): Promise<Count> {
    return this.userRepository.coins(id).patch(coin, where);
  }

  @del('/users/{id}/coins', {
    responses: {
      '200': {
        description: 'User.Coin DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Coin)) where?: Where<Coin>,
  ): Promise<Count> {
    return this.userRepository.coins(id).delete(where);
  }
}

import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    description: 'The ID for a user.',
    id: true,
    generated: true,
    type: 'number',
  })
  id: number;

  @property({
    description: 'The username for a user.',
    required: true,
    default: 'Anonymous User',
    type: 'string',
  })
  username: string;
}

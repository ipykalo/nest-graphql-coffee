import { MinLength } from 'class-validator';
import * as GraphQLTypes from '../../schema';

export class CreateCoffeeInput extends GraphQLTypes.CreateCoffeeInput {
  @MinLength(3)
  name: string;
}

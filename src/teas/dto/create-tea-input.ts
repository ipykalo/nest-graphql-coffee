import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType({ description: 'Create tea object' })
export class CreateTeaInput {
  @MinLength(3)
  @Field(() => String, { description: 'Name of the Tea' })
  name: string;
}

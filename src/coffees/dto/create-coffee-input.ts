import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { CoffeeType } from 'src/common/enums/coffee-type.enum';

@InputType({ description: 'Create coffee input object' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A coffee name' })
  name: string;

  @Field(() => String, { description: 'A brand of coffee' })
  brand: string;

  @Field(() => [String], { description: 'flavors' })
  flavors: string[];

  @Field(() => CoffeeType, { description: 'Coffee Type' })
  type: CoffeeType;
}

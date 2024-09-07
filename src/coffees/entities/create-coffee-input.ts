import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input object' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A coffee name' })
  name: string;

  @Field(() => String, { description: 'A brand of coffee' })
  brand: string;

  @Field(() => [String], { description: 'flavors' })
  flavors: string[];
}

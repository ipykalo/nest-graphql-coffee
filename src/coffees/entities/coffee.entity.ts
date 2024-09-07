import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee model' })
export class Coffee {
  //@Field(type => Int) we omit this becasie of @nestjs/graphql plugin
  @Field(() => ID, { description: 'Unique ID' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}

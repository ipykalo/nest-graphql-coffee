import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from '../../common/interfaces/drink.interface';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType({ implements: () => Drink, description: 'Tea model' })
export class Tea implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique ID' })
  id: number;

  @Column()
  name: string;
}

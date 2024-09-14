import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';
import { Drink } from '../../common/interfaces/drink.interface';

@Entity()
@ObjectType({ implements: () => Drink, description: 'Coffee model' })
export class Coffee implements Drink {
  //@Field(type => Int) we omit this becasie of @nestjs/graphql plugin
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique ID' })
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees /* inverse side */, {
    cascade: true,
  })
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;
}

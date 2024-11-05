import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor as FlavorSchema } from '../../schema';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor implements FlavorSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}

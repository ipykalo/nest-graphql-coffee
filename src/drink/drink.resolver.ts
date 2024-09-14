import { Resolver, Query } from '@nestjs/graphql';
import { Drink } from '../common/interfaces/drink.interface';
import { CoffeesService } from 'src/coffees/coffees.service';
import { TeasService } from 'src/teas/teas.service';

@Resolver()
export class DrinkResolver {
  constructor(
    private coffeesService: CoffeesService,
    private teasService: TeasService,
  ) {}

  @Query(() => [Drink], { name: 'drinks' })
  async findAll() {
    const coffees = await this.coffeesService.findAll();
    const teas = await this.teasService.findAll();

    return [...coffees, ...teas];
  }
}

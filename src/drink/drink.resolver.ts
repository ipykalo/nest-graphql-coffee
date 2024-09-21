import { Resolver, Query } from '@nestjs/graphql';
import { CoffeesService } from 'src/coffees/coffees.service';
import { TeasService } from 'src/teas/teas.service';
import { DrinksResultUnion } from '../common/unions/drinks-result.union';

@Resolver()
export class DrinkResolver {
  constructor(
    private coffeesService: CoffeesService,
    private teasService: TeasService,
  ) {}

  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    const coffees = await this.coffeesService.findAll();
    const teas = await this.teasService.findAll();

    return [...coffees, ...teas];
  }
}

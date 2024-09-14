import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { TeasService } from './teas.service';
import { Tea } from './entities/tea.entity';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateTeaInput } from './dto/update-tea-input';
import { CreateTeaInput } from './dto/create-tea-input';

@Resolver()
export class TeasResolver {
  constructor(private teasService: TeasService) {}

  @Query(() => [Tea], { name: 'teas' })
  async findAll() {
    return this.teasService.findAll();
  }

  @Query(() => Tea, { name: 'tea' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.teasService.findOne(id);
  }

  @Mutation(() => Tea, { name: 'createTea' })
  async create(@Args('createTeaInput') CreateTeaInput: CreateTeaInput) {
    return this.teasService.create(CreateTeaInput);
  }

  @Mutation(() => Tea, { name: 'updateTea' })
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateTeaInput') UpdateTeaInput: UpdateTeaInput,
  ) {
    return this.teasService.update(id, UpdateTeaInput);
  }

  @Mutation(() => Tea, { name: 'removeTea' })
  async remove(@Args('id', ParseIntPipe) id: number) {
    return this.teasService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from './entities/tea.entity';
import { UserInputError } from 'apollo-server-express';
import { CreateTeaInput } from './dto/create-tea-input';
import { UpdateTeaInput } from './dto/update-tea-input';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea)
    private readonly teasRepository: Repository<Tea>,
  ) {}

  findAll() {
    return this.teasRepository.find();
  }

  findOne(id: number) {
    const tea = this.teasRepository.findOne({ where: { id } });

    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist.`);
    }
    return tea;
  }

  async create(teaInput: CreateTeaInput) {
    const tea = this.teasRepository.create(teaInput);
    return this.teasRepository.save(tea);
  }

  async update(id: number, updateCoffeeInput: UpdateTeaInput) {
    const tea = await this.teasRepository.preload({
      id,
      ...updateCoffeeInput,
    });

    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist`);
    }
    return this.teasRepository.save(tea);
  }

  async remove(id: number) {
    const tea = await this.teasRepository.findOne({
      where: { id },
    });

    return this.teasRepository.remove(tea);
  }
}

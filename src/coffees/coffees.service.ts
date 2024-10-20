import { Injectable } from '@nestjs/common';
import { Coffee, CreateCoffeeInput } from '../schema';

@Injectable()
export class CoffeesService {
  async findAll(): Promise<Coffee[]> {
    return [];
  }

  async findOne(id: number): Promise<Coffee> {
    return null;
  }

  async create(createCoffeeInput: CreateCoffeeInput): Promise<Coffee> {
    return null;
  }
}

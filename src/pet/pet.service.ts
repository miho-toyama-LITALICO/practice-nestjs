import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  findAllPets(): Promise<Pet[]> {
    return this.petsRepository.find({ relations: ['owner'] });
  }

  findOnePet(id: string): Promise<Pet> {
    return this.petsRepository.findOne(id, { relations: ['owner'] });
  }

  async addPet(name: string, breed: string) {
    const pet = new Pet(name, breed);
    const result = await this.petsRepository.insert(pet);
    return result;
  }

  async removePet(id: string): Promise<void> {
    await this.petsRepository.delete(id);
  }
}

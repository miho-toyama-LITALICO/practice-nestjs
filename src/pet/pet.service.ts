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
    return this.petsRepository.find();
  }

  findOnePet(id: string): Promise<Pet> {
    return this.petsRepository.findOne(id);
  }

  async addPet(name: string, ownerName: string, breed: string) {
    const pet = new Pet(name, ownerName, breed);
    const result = await this.petsRepository.insert(pet);
    return result;
  }

  async removePet(id: string): Promise<void> {
    await this.petsRepository.delete(id);
  }
}

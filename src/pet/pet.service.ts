import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity';
import { PetDto } from 'dto/pet.dto';
import { Owner } from '../entities/owner.entity';
import { OwnerService } from '../owner/owner.service';

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

  async addPet(petDto: PetDto, ownerId: string): Promise<Pet> {
    const { name, breed, owner } = petDto;
    const pet = new Pet(name, breed);
    pet.ownerId = ownerId;
    await this.petsRepository.save(pet);
    return pet;
  }

  async removePet(id: string): Promise<void> {
    await this.petsRepository.delete(id);
  }
}

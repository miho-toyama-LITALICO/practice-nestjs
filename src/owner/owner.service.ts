import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from '../entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownersRepository: Repository<Owner>,
  ) {}

  findAllOwners(): Promise<Owner[]> {
    return this.ownersRepository.find({ relations: ['pets'] });
  }

  findOneOwner(id: string): Promise<Owner> {
    return this.ownersRepository.findOne(id, { relations: ['pets'] });
  }

  async addOwner(name: string) {
    const owner = new Owner(name);
    const result = await this.ownersRepository.insert(owner);
    return result;
  }

  async removeOwner(id: string): Promise<void> {
    await this.ownersRepository.delete(id);
  }
}

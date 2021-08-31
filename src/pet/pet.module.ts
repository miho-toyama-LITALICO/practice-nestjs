import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { Pet } from '../entities/pet.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Owner } from 'src/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Owner])],
  controllers: [PetController],
  providers: [PetService, OwnerService],
})
export class PetModule {}

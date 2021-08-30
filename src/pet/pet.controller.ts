import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from 'dto/pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly service: PetService) {}

  @Get()
  findAllPets() {
    return this.service.findAllPets();
  }

  @Post()
  addPet(@Query() petDto: PetDto) {
    return this.service.addPet(petDto);
  }
}

import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly service: PetService) {}

  @Get()
  findAllPets() {
    return this.service.findAllPets();
  }

  @Post()
  addPet(@Query() query: { name: string; ownerName: string; breed: string }) {
    return this.service.addPet(query.name, query.ownerName, query.breed);
  }
}

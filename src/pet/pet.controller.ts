import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from 'dto/pet.dto';
import { OwnerService } from 'src/owner/owner.service';

@Controller('pet')
export class PetController {
  constructor(
    private readonly service: PetService,
    private readonly ownerService: OwnerService,
  ) {}

  @Get()
  findAllPets() {
    return this.service.findAllPets();
  }

  @Get(':id')
  findOnePet(@Param('id') id: string) {
    return this.service.findOnePet(id);
  }

  @Post()
  async addPet(@Body() petDto: PetDto) {
    const owner = await this.ownerService.addOwner(petDto.owner.name);
    return this.service.addPet(petDto, owner.id);
  }

  @Patch(':id')
  async updatePet(@Param('id') id: string, @Body() petDto: PetDto) {
    const pet = await this.service.findOnePet(id);
    pet.owner =
      pet.owner ?? (await this.ownerService.addOwner(petDto.owner.name));
    return this.service.updatePet(id, petDto, pet.owner.id);
  }

  @Delete(':id')
  removePet(@Param('id') id: string) {
    return this.service.removePet(id);
  }
}

import { Controller, Get, Post, Query } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private readonly service: OwnerService) {}

  @Get()
  findAllOwners() {
    return this.service.findAllOwners();
  }

  @Post()
  addOwner(@Query() query: { name: string }) {
    return this.service.addOwner(query.name);
  }
}

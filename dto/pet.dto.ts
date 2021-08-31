import { OwnerDto } from './owner.dto';

export class PetDto {
  id: string;
  name: string;
  breed: string;
  owner: OwnerDto;
}

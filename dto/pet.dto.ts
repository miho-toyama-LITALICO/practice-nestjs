import { OwnerDto } from './owner.dto';

export class PetDto {
  id: number;
  name: string;
  breed: string;
  owner: OwnerDto;
}

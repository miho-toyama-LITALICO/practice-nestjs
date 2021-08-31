import { PetDto } from './pet.dto';

export class OwnerDto {
  id: string;
  name: string;
  pets: PetDto[];
}

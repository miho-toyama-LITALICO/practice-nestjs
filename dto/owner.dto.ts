import { PetDto } from './pet.dto';

export class OwnerDto {
  id: number;
  name: string;
  pets: PetDto[];
}

import { IsNotEmpty, IsString } from 'class-validator';
import { PetDto } from './pet.dto';

export class OwnerDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  pets: PetDto[];
}

import { IsNotEmpty, IsString } from 'class-validator';
import { OwnerDto } from './owner.dto';

export class PetDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsNotEmpty()
  owner: OwnerDto;
}

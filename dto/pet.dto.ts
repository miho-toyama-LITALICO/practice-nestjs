import {
  IsNotEmpty,
  IsString,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OwnerDto } from './owner.dto';

export class PetDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OwnerDto)
  owner: OwnerDto;
}

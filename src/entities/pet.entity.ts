import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Owner } from './owner.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  breed: string;

  /*
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
  */

  @ManyToOne(() => Owner, (owner) => owner.pets)
  owner: Owner;
}

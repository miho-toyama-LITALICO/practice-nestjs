import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];
}

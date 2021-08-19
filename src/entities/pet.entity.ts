import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  ownerName: string;

  @Column({ length: 100 })
  breed: string;

  constructor(name: string, ownerName: string, breed: string) {
    this.name = name;
    this.ownerName = ownerName;
    this.breed = breed;
  }
}

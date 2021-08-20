import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePetTable1629438642782 implements MigrationInterface {
    name = 'CreatePetTable1629438642782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pet" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "ownerName" varchar(100) NOT NULL, "breed" varchar(100) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pet"`);
    }

}

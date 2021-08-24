import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOwnerTable1629780877455 implements MigrationInterface {
    name = 'CreateOwnerTable1629780877455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "owner" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_pet" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "ownerName" varchar(100) NOT NULL, "breed" varchar(100) NOT NULL, "ownerId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_pet"("id", "name", "ownerName", "breed") SELECT "id", "name", "ownerName", "breed" FROM "pet"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`ALTER TABLE "temporary_pet" RENAME TO "pet"`);
        await queryRunner.query(`CREATE TABLE "temporary_pet" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "ownerName" varchar(100) NOT NULL, "breed" varchar(100) NOT NULL, "ownerId" varchar, CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1" FOREIGN KEY ("ownerId") REFERENCES "owner" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_pet"("id", "name", "ownerName", "breed", "ownerId") SELECT "id", "name", "ownerName", "breed", "ownerId" FROM "pet"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`ALTER TABLE "temporary_pet" RENAME TO "pet"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" RENAME TO "temporary_pet"`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "ownerName" varchar(100) NOT NULL, "breed" varchar(100) NOT NULL, "ownerId" varchar)`);
        await queryRunner.query(`INSERT INTO "pet"("id", "name", "ownerName", "breed", "ownerId") SELECT "id", "name", "ownerName", "breed", "ownerId" FROM "temporary_pet"`);
        await queryRunner.query(`DROP TABLE "temporary_pet"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME TO "temporary_pet"`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "ownerName" varchar(100) NOT NULL, "breed" varchar(100) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "pet"("id", "name", "ownerName", "breed") SELECT "id", "name", "ownerName", "breed" FROM "temporary_pet"`);
        await queryRunner.query(`DROP TABLE "temporary_pet"`);
        await queryRunner.query(`DROP TABLE "owner"`);
    }

}

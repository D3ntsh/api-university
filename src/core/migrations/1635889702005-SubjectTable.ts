import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class SubjectTable1635889702005 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableSubjects = new Table({
            name: 'subjects', columns: [
                {
                    name: 'id',
                    type: 'VARCHAR',
                    length: '36',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'VARCHAR',
                    length: '50'
                },
                {
                    name: 'credits',
                    type: 'INT'
                }
            ]
        });

        await queryRunner.createTable(tableSubjects);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableSubjects = await queryRunner.getTable('subjects');

        if(undefined !== tableSubjects){
            await queryRunner.dropTable(tableSubjects);
        }
    }

}

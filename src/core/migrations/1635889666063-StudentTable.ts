import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class StudentTable1635889666063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableStudents = new Table({ 
            name: 'students', columns:[
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
                    name: 'birthDate',
                    type: 'DATE',
                },
                {
                    name: 'semester',
                    type: 'INT'
                    //length: '2'
                },
                {
                    name: 'degree',
                    type: 'INT'
                }
            ]
        });

        await queryRunner.createTable(tableStudents);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableStudents = await queryRunner.getTable('students');
            
        if (undefined !== tableStudents){
            await queryRunner.dropTable(tableStudents)
        }
    }
}

import { ConnectionOptions, } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Student } from "./students/models/students.entity";
import { Subjects } from "./subjects/models/subjects.entity";

require('dotenv').config()

const config: ConnectionOptions = {
    name: 'default',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    entities: [Student, Subjects],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
    migrationsRun: true,
    logging: 'all',
    migrationsTableName: 'migration',
    migrations: ['src/core/migrations/*{.ts,.js}'],
    cli:{
        migrationsDir: 'src/core/migrations'
    }
}

export = config ;
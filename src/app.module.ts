import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';
import { StudentsModule } from './students/students.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subjects } from './subjects/models/subjects.entity';
import { Student } from './students/models/students.entity';

require('dotenv').config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE,
      entities: [Subjects , Student],
      autoLoadEntities: true,
      synchronize: true,
    }),
    SubjectsModule,
    StudentsModule,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './models/students.entity';
import { StudentsController } from './controller/students/students.controller';
import { StudentsService } from './services/students/students.service';


@Module({
  imports: [TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}

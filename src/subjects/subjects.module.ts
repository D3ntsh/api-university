import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsController } from './controller/subjects/subjects.controller';
import { Subjects } from './models/subjects.entity';
import { SubjectsService } from './services/subjects/subjects.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Subjects])
    ],
    controllers: [SubjectsController],
    providers: [SubjectsService],
})
export class SubjectsModule {}

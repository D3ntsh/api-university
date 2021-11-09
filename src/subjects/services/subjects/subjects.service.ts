import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubjectDto } from 'src/subjects/dtos/createSubject.dto';
import { EditSubjectDto } from 'src/subjects/dtos/editSubject.dto';
import { Subjects } from 'src/subjects/models/subjects.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
    constructor(
        @InjectRepository(Subjects) private readonly subjectRepository: Repository<Subjects>
    ){}

    public async getMany(): Promise<Subjects[]>{
        return await this.subjectRepository.find();
    }

    public async createOne(dto: CreateSubjectDto): Promise<Subjects>{
        console.log(dto);
        return await this.subjectRepository.save(dto);
    }

    public async getOne(id: string){
        console.log('Sucessfully getOne');
        return await this.subjectRepository.findOne(id);
    }

    public async editOne(id: string, dto: EditSubjectDto){
        return await this.subjectRepository.update(id, dto);
    }

    public async deleteOne(id: string){
        console.log(id);
        return await this.subjectRepository.delete({id: id});
    }
}

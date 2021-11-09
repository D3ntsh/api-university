import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from 'src/students/dtos/createStudent.dto';
import { editStudenrDto } from 'src/students/dtos/editStudent.dto';
import { Student } from 'src/students/models/students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

    constructor(
        @InjectRepository(Student) private readonly studentRepository: Repository<Student>
    ){ }

    public async getMany(): Promise<Student[]>{
        return await this.studentRepository.find();
    }

    public async createOne(dto: CreateStudentDto): Promise<Student> {
        console.log(dto);
        return await this.studentRepository.save(dto);
    }

    public async getOne(id: string){
        console.log('getOne is correct');
        return await this.studentRepository.findOne(id);
    }

    public async editOne(id:string, dto:editStudenrDto){
        return await this.studentRepository.update(id, dto);
    }

    public async deleteOne(id: string){
        console.log(id);
        return await this.studentRepository.delete({id: id});
    }
}

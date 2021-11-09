import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateStudentDto } from 'src/students/dtos/createStudent.dto';
import { editStudenrDto } from 'src/students/dtos/editStudent.dto';
import { StudentsService } from 'src/students/services/students/students.service';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentService : StudentsService){}

    @Get()
    public async getStudents(){
        const data = await this.studentService.getMany();
        return{
            message : "Peticion Correcta",
            data
        }
    }

    @Get(':id')
    public async getStudent(@Param('id')id: string ){
        return await this.studentService.getOne(id);
    }

    @Post()
    public async createStudent(@Body() dto: CreateStudentDto){
        console.log('dto', dto);
        return await this.studentService.createOne(dto);
    }

    @Put(':id')
    public async editStudent(
        @Param('id') id: string,
        @Body() dto: editStudenrDto
    ){
        return this.studentService.editOne(id, dto);
    }

    @Delete(':id')
    public async deleteStudent(@Param('id') id: string){
        return this.studentService.deleteOne(id)
    }
}

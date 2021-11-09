import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSubjectDto } from 'src/subjects/dtos/createSubject.dto';
import { EditSubjectDto } from 'src/subjects/dtos/editSubject.dto';
import { SubjectsService } from 'src/subjects/services/subjects/subjects.service';

@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectService: SubjectsService){}

    @Get()
    public async getSubjects(){
        const data = await  this . subjectService.getMany();
        return{
            message: "Sucessfull",
            data
        }
    }

    @Get(':id')
    public async getSubject(@Param('id') id: string ){
        return await this.subjectService.getOne(id);
    }

    @Post()
    public async createSubject(@Body() dto: CreateSubjectDto){
        console.log('dto', dto);
        return await this.subjectService.createOne(dto);
    }

    @Put(':id')
    public async editSubject(
        @Param('id') id: string,
        @Body() dto: EditSubjectDto
    ){
        return this.subjectService.editOne(id, dto);
    }

    @Delete(':id')
    public async deleteSubject(@Param('id') id: string){
        return this.subjectService.deleteOne(id);
    }
}

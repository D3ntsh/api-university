import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { CreateStudentDto } from 'src/students/dtos/createStudent.dto';
import { Student } from 'src/students/models/students.entity';
import { DeleteResult } from 'typeorm';
import { StudentsService } from './students.service';

const mockStudent = new CreateStudentDto();
mockStudent.name = "StudentTest";
mockStudent.birthDate = new Date("08/11/2021");
mockStudent.semester = 7;
mockStudent.degree = 2;

const studentGet = new Student();
studentGet.id = 'fdec9d03-382b-4099-8e7c-e6ee5f9cfd5c';
studentGet.name = 'Student Name Get';
studentGet.birthDate = new Date("03/14/2021");
studentGet.semester = 9;
studentGet.degree = 7;

const student2 = new Student();
student2.id = "6c4ef983-2a32-41dd-b40b-3df3b3f81197";
student2.name = "Student Name 2";
student2.birthDate = new Date("06/02/2020");
student2.semester = 9;
student2.degree = 5;

let allStudents: Student[] = []

allStudents.push(studentGet);
allStudents.push(student2);

const deleteStudent =  new Student();
deleteStudent.id = "813826ba-820d-4281-b3ea-68e135e41349";
deleteStudent.name = "Delete Student Test";
deleteStudent.birthDate =  new Date("02/02/2020");
deleteStudent.semester = 8;
deleteStudent.degree = 2;

const updateSudent =  new Student();
updateSudent.id = "d712d636-d2f4-4f18-bd4b-f744cef1c89b";
updateSudent.name = "Update Student";
updateSudent.birthDate = new Date("02/03/2020");
updateSudent.semester = 6;
updateSudent.degree = 2;


describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService,
      {
        provide: getRepositoryToken(Student),
        useValue: {
          save: jest.fn().mockResolvedValue(mockStudent),
          findOne: jest.fn().mockResolvedValue(studentGet),
          find: jest.fn().mockReturnValue(allStudents),
          delete: jest.fn().mockReturnValue(deleteStudent),
          update: jest.fn().mockResolvedValue(updateSudent),
        }

      }],
    }).compile();

    service = module.get<StudentsService>(StudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create student success', async() =>{
    const student = new CreateStudentDto();

    student.name = 'StudentTest',
    student.birthDate = new Date("08/11/2021");
    student.semester = 7;
    student.degree = 2;
    
    const studentSaved = await service.createOne(student);

    expect(studentSaved.name).toEqual(mockStudent.name);
  });

  it('get all Success', async() => {
    const find = await service.getMany();
    console.log(find);

    expect(find).toEqual(allStudents);
  });

  it('get a Student Success', async() => {
    const idStudent = "5d6921b9-298d-48d4-b243-4234f33a6237";
    const savedStudent = await service.getOne(idStudent);

    expect(savedStudent.id).toEqual(idStudent);
  });

  it('update student by id', async() =>{
    const updateData: any = await service.editOne(updateSudent.id, updateSudent);

    expect(updateData.name).toEqual(updateSudent.name);
  });

  it('delete Student by id', async() => {
    const deleteStudents: any = await service.deleteOne(deleteStudent.id);
    console.log(deleteStudents);

    expect(deleteStudents.id).toEqual(deleteStudent.id);
  });

});

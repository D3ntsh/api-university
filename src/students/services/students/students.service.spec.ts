import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateStudentDto } from 'src/students/dtos/createStudent.dto';
import { Student } from 'src/students/models/students.entity';
import { StudentsService } from './students.service';

const mockStudent = new CreateStudentDto();
mockStudent.name = "StudentTest";
mockStudent.semester = 7;
mockStudent.degree = 2;

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService,
      {
        provide: getRepositoryToken(Student),
        useValue: {
          save: jest.fn().mockResolvedValue(mockStudent),
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

    student.name = 'Student Test',
    student.semester = 9;
    student.degree = 2;
    
    const studentSaved = await service.createOne(student);

    expect(studentSaved.name).toEqual(mockStudent.name);
  });
});

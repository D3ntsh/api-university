import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from '../../dtos/createSubject.dto';
import { Subjects } from '../../models/subjects.entity';

//Mock POST
const mockSubject = new CreateSubjectDto();
mockSubject.name = "SubjectTest";
mockSubject.credits = 6;
//Mock GET
const subjectGet =  new Subjects();
subjectGet.id = "b12823e9-ccd2-407f-bacf-fce907004132";
subjectGet.name = "Subject Get";
subjectGet.credits = 9;
// Mock Get 2 
const subjectGet2 =  new Subjects();
subjectGet2.id = "3d1ffd99-a4ce-4512-814b-70f1a46fa0dd";
subjectGet2.name = "Subject Get 2";
subjectGet2.credits = 8;

let allSubjects: Subjects[] = [];

allSubjects.push(subjectGet);
allSubjects.push(subjectGet2);
// Mock Delete
const deleteSubject = new Subjects();
deleteSubject.id = "62bad1ba-031c-4412-b006-e588ca081b47";
deleteSubject.name = "Subject Delete";
deleteSubject.credits = 6;
//Mock PUT
const updateSubject = new Subjects();
updateSubject.id = "bc58b33a-eaa2-44ac-9557-a86e439a406e";
updateSubject.name = "Subject Update";
updateSubject.credits = 3;


describe('SubjectsService', () => {
  let service: SubjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectsService, 
      {
        provide: getRepositoryToken(Subjects),
        useValue: {
          save: jest.fn().mockResolvedValue(mockSubject),
          findOne: jest.fn().mockResolvedValue(subjectGet),
          find: jest.fn().mockReturnValue(allSubjects),
          delete: jest.fn().mockReturnValue(deleteSubject),
          update: jest.fn().mockResolvedValue(updateSubject),
        }
      }],
    }).compile();

    service = module.get<SubjectsService>(SubjectsService);
    //service = await module.resolve(SubjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Create Subject Sucess', async () =>{
    const subject = new Subjects();

    subject.name = 'SubjectTest';
    subject.credits = 6;
    const subjectSaved = await service.createOne(subject);

    expect(subjectSaved.name).toEqual(mockSubject.name);
  });

  it('get all Subject secess', async() => {
    const find = await service.getMany();
    console.log(find);
    
    expect(find).toEqual(allSubjects);
  });

  it('get Subject sucess', async() => {
    const idSubject = "b12823e9-ccd2-407f-bacf-fce907004132";
    const savedSubject = await service.getOne(idSubject);

    expect(savedSubject.id).toEqual(idSubject);
  });

  it('update Subject by id', async() =>{
    const updatedata:any = await service.editOne(updateSubject.id, updateSubject);

    expect(updatedata.name).toEqual(updateSubject.name);
  });

  it('delete subject by id', async() => {
    const deleteSubj: any = await service.deleteOne(deleteSubject.id);
    console.log(deleteSubject);

    expect(deleteSubj.id).toEqual(deleteSubject.id);
  });

});

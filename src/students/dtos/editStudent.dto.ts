import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentDto } from "./createStudent.dto";

export class editStudenrDto extends PartialType(CreateStudentDto){}
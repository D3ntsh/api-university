import { PartialType } from "@nestjs/mapped-types";
import { CreateSubjectDto } from "./createSubject.dto";


export class EditSubjectDto extends PartialType(CreateSubjectDto){}
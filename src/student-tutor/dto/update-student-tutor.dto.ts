import { PartialType } from '@nestjs/swagger';
import { CreateStudentTutorDto } from './create-student-tutor.dto';

export class UpdateStudentTutorDto extends PartialType(CreateStudentTutorDto) {}

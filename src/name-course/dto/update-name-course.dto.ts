import { PartialType } from '@nestjs/swagger';
import { CreateNameCourseDto } from './create-name-course.dto';

export class UpdateNameCourseDto extends PartialType(CreateNameCourseDto) {}

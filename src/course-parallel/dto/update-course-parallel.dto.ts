import { PartialType } from '@nestjs/swagger';
import { CreateCourseParallelDto } from './create-course-parallel.dto';

export class UpdateCourseParallelDto extends PartialType(CreateCourseParallelDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAcademicPeriodicDto } from './create-academic-periodic.dto';

export class UpdateAcademicPeriodicDto extends PartialType(CreateAcademicPeriodicDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateTypeTutorDto } from './create-type-tutor.dto';

export class UpdateTypeTutorDto extends PartialType(CreateTypeTutorDto) {}

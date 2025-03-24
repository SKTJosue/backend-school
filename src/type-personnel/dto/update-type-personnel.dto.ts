import { PartialType } from '@nestjs/swagger';
import { CreateTypePersonnelDto } from './create-type-personnel.dto';

export class UpdateTypePersonnelDto extends PartialType(CreateTypePersonnelDto) {}

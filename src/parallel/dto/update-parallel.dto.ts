import { PartialType } from '@nestjs/swagger';
import { CreateParallelDto } from './create-parallel.dto';

export class UpdateParallelDto extends PartialType(CreateParallelDto) {}

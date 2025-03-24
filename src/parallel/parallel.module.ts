import { Module } from '@nestjs/common';
import { ParallelService } from './parallel.service';
import { ParallelController } from './parallel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parallel } from './entities/parallel.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Parallel])],
  controllers: [ParallelController],
  providers: [ParallelService],
})
export class ParallelModule {}

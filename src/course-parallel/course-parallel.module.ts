import { forwardRef, Module } from '@nestjs/common';
import { CourseParallelService } from './course-parallel.service';
import { CourseParallelController } from './course-parallel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseParallel } from './entities/course-parallel.entity';
import { CourseModule } from 'src/course/course.module';
import { ParallelModule } from 'src/parallel/parallel.module';

@Module({
  imports: [TypeOrmModule.forFeature([CourseParallel]),
  forwardRef(() => CourseModule),
  forwardRef(() => ParallelModule),
],
  controllers: [CourseParallelController],
  providers: [CourseParallelService],
})
export class CourseParallelModule {}

import { forwardRef, Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CourseParallelModule } from 'src/course-parallel/course-parallel.module';
import { GradeModule } from 'src/grade/grade.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]),
  CourseModule, GradeModule,
  forwardRef(() => CourseParallelModule),],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}

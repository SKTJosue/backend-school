import { Module } from '@nestjs/common';
import { NameCourseService } from './name-course.service';
import { NameCourseController } from './name-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameCourse } from './entities/name-course.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([NameCourse])],
  controllers: [NameCourseController],
  providers: [NameCourseService],
})
export class NameCourseModule {}

import { Module } from '@nestjs/common';
import { StudentTutorService } from './student-tutor.service';
import { StudentTutorController } from './student-tutor.controller';

@Module({
  controllers: [StudentTutorController],
  providers: [StudentTutorService],
})
export class StudentTutorModule {}

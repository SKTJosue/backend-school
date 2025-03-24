import { forwardRef, Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { PersonnelModule } from 'src/personnel/personnel.module';
import { CourseModule } from 'src/course/course.module';
import { ManagementModule } from 'src/management/management.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Student]),
        forwardRef(() => PersonnelModule),
        forwardRef(() => CourseModule),
        forwardRef(() => ManagementModule),
    ],
    controllers: [StudentController],
    providers: [StudentService],
})
export class StudentModule {}

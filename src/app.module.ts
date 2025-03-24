import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { StudentModule } from './student/student.module';
import { SchoolModule } from './school/school.module';
import { PersonnelModule } from './personnel/personnel.module';
import { TypePersonnelModule } from './type-personnel/type-personnel.module';
import { ManagementModule } from './management/management.module';
import { CourseModule } from './course/course.module';
import { GradeModule } from './grade/grade.module';
import { StudentTutorModule } from './student-tutor/student-tutor.module';
import { TutorModule } from './tutor/tutor.module';
import { TypeTutorModule } from './type-tutor/type-tutor.module';
import { ParallelModule } from './parallel/parallel.module';
import { NameCourseModule } from './name-course/name-course.module';
import { CourseParallelModule } from './course-parallel/course-parallel.module';
import { AcademicPeriodicModule } from './academic-periodic/academic-periodic.module';
import { EvaluationCriteriaModule } from './evaluation-criteria/evaluation-criteria.module';
import { ManagementEvaluationCriteriaModule } from './management-evaluation-criteria/management-evaluation-criteria.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('database.host'), // Asegúrate de que esto está correcto
                port: configService.get<number>('database.port'),
                username: configService.get<string>('database.username'),
                password: configService.get<string>('database.password'),
                database: configService.get<string>('database.name'),
                autoLoadEntities: true,
                synchronize: process.env.NODE_ENV !== 'production',
                logging: process.env.NODE_ENV !== 'production',
                ssl: false, // Deshabilitar SSL
                extra: {}, // Eliminar configuración SSL adicional
            }),
            inject: [ConfigService],
        }),
        StudentModule,
        TeacherModule,
        SchoolModule,
        PersonnelModule,
        TypePersonnelModule,
        ManagementModule,
        CourseModule,
        GradeModule,
        StudentTutorModule,
        TutorModule,
        TypeTutorModule,
        ParallelModule,
        NameCourseModule,
        CourseParallelModule,
        AcademicPeriodicModule,
        EvaluationCriteriaModule,
        ManagementEvaluationCriteriaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

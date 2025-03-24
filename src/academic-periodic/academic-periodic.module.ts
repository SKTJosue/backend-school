import { forwardRef, Module } from '@nestjs/common';
import { AcademicPeriodicService } from './academic-periodic.service';
import { AcademicPeriodicController } from './academic-periodic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicPeriodic } from './entities/academic-periodic.entity';
import { ManagementModule } from 'src/management/management.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([AcademicPeriodic]),
        forwardRef(() => ManagementModule),
    ],
    controllers: [AcademicPeriodicController],
    providers: [AcademicPeriodicService],
})
export class AcademicPeriodicModule {}

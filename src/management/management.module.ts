import { forwardRef, Module } from '@nestjs/common';
import { ManagementService } from './management.service';
import { ManagementController } from './management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Management } from './entities/management.entity';
import { AcademicPeriodicModule } from 'src/academic-periodic/academic-periodic.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Management]),
        forwardRef(() => AcademicPeriodicModule),
    ],
    controllers: [ManagementController],
    providers: [ManagementService],
})
export class ManagementModule {}

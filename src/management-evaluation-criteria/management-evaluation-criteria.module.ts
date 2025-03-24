import { forwardRef, Module } from '@nestjs/common';
import { ManagementEvaluationCriteriaService } from './management-evaluation-criteria.service';
import { ManagementEvaluationCriteriaController } from './management-evaluation-criteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagementEvaluationCriterion } from './entities/management-evaluation-criterion.entity';
import { ManagementModule } from 'src/management/management.module';
import { EvaluationCriterion } from 'src/evaluation-criteria/entities/evaluation-criterion.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ManagementEvaluationCriterion]),
        forwardRef(() => ManagementModule),
        forwardRef(() => EvaluationCriterion),
    ],
    controllers: [ManagementEvaluationCriteriaController],
    providers: [ManagementEvaluationCriteriaService],
})
export class ManagementEvaluationCriteriaModule {}

import { PartialType } from '@nestjs/swagger';
import { CreateManagementEvaluationCriterionDto } from './create-management-evaluation-criterion.dto';

export class UpdateManagementEvaluationCriterionDto extends PartialType(CreateManagementEvaluationCriterionDto) {}

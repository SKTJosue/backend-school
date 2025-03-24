import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateManagementEvaluationCriterionDto {
    @IsNumber()
    @IsNotEmpty()
    managementId: number;

    @IsNumber()
    @IsNotEmpty()
    evaluationCriterionId: number;
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}

import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateCourseParallelDto {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    idCourse: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    idParallel: number;
}

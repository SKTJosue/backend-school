import { IsNotEmpty, IsString } from "class-validator";

export class CreateAcademicPeriodicDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
}

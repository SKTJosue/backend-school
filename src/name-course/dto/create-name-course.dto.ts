import { IsNotEmpty, IsString } from "class-validator";

export class CreateNameCourseDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}

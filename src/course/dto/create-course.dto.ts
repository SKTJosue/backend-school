import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCourseDto {
    @ApiProperty({
        description: 'The ID of the name course',
        example: 1,
        type: Number,
    })
    @IsNumber()
    @IsNotEmpty()
    idNameCourse: number;

    @ApiProperty({
        description: 'The state of the course',
        example: true,
        type: Boolean,
    })
    @IsBoolean()
    @IsOptional() // Optional because it has a default value
    statate: boolean;

    @ApiProperty({
        description: 'The ID of the grade',
        example: 1,
        type: Number,
    })
    @IsNumber()
    @IsNotEmpty()
    idGrade: number;
}

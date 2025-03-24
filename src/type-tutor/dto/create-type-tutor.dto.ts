import { IsNotEmpty } from "class-validator";

export class CreateTypeTutorDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
}

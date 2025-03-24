import { IsNotEmpty } from "class-validator";

export class CreateTypePersonnelDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
}

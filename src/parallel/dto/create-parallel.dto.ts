import { IsNotEmpty, IsString } from "class-validator";

export class CreateParallelDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}

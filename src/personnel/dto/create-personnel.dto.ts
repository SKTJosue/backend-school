import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePersonnelDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    lastname: string;
    @IsNotEmpty()
    @IsString()
    ci: string;
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsNotEmpty()
    @IsString()
    phone: string;
    @IsNotEmpty()
    @IsNumber()
    idTypePersonnel: number;
}

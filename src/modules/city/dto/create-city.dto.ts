import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsInt()
    @IsNotEmpty()
    departamento_id: number;
}

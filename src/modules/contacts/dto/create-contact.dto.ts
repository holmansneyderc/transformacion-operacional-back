import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @IsString() @IsNotEmpty()
    nombre: string;

    @IsString() @IsNotEmpty()
    tipo_documento: string;

    @IsString() @IsNotEmpty()
    documento: string;

    @IsString() @IsNotEmpty()
    celular: string;

    @IsEmail()
    email: string;

    @IsString()
    cargo: string;

    @IsBoolean()
    es_gerente: boolean;
}

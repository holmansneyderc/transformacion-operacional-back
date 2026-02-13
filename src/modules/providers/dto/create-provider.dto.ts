import { IsString, IsNotEmpty, IsEmail, IsInt, IsArray, ArrayMinSize } from 'class-validator';

export class CreateProviderDto {
    @IsString()
    @IsNotEmpty()
    razon_social: string;

    @IsString()
    @IsNotEmpty()
    nit: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsInt()
    @IsNotEmpty()
    estado_id: number;
}

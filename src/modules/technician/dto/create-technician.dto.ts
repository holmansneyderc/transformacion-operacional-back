import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTechnicianDto {

    @IsString() 
    @IsNotEmpty() 
    nombre: string;

    @IsEmail() 
    @IsNotEmpty() 
    correo: string;

    @IsString() 
    @IsNotEmpty() 
    cedula: string;

    @IsString() 
    @IsNotEmpty() 
    celular: string;

    @IsInt() 
    @IsNotEmpty() 
    rol_id: number;

    @IsString()
    @IsNotEmpty()
    disponibilidad: string;

    @IsString()
    @IsNotEmpty()
    causa_rechazo: string;
    
    @IsInt()
    @IsNotEmpty()
    estado_id: number;
    
    @IsInt()
    @IsNotEmpty()
    sucursal_id: number;
}

import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateHistoricStateDto {
    @IsInt()
    @IsNotEmpty()
    usuario_id: number;

    @IsString()
    @IsNotEmpty()
    fecha_inicio: string;

    @IsString()
    @IsOptional()
    sub_razon?: string;
}
